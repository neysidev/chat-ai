import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

/**
 * Manages scroll behavior for a messages container:
 * - Ref for the scrollable element
 * - Auto scroll to bottom when content changes
 * - Visibility of "scroll to bottom" button
 * - Programmatic scroll to bottom
 *
 * @param scrollWhen  - Dependencies that trigger scroll-to-bottom (e.g. [messages])
 * @param isStreaming - When true, auto-scroll only fires if the user hasn't
 *                     manually scrolled up, so reading older messages is not
 *                     interrupted while the AI is generating a response.
 */
export function useMessagesScroll(
  scrollWhen: unknown[] = [],
  isStreaming = false
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrollVisible, setIsScrollVisible] = useState(false)
  // Tracks whether the user is currently at (or near) the bottom.
  const isAtBottom = useRef(true)

  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const { scrollHeight, scrollTop, clientHeight } = container
    const atBottom = scrollTop + clientHeight >= scrollHeight - 20
    isAtBottom.current = atBottom
    setIsScrollVisible(!atBottom)
  }, [])

  const scrollToBottom = useCallback(() => {
    const container = containerRef.current
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // While streaming: respect the user's position — only scroll if they
    // haven't moved away from the bottom themselves.
    // Otherwise (new message confirmed, initial load): always scroll.
    if (!isStreaming || isAtBottom.current) {
      container.scrollTop = container.scrollHeight
      handleScroll()
    }
  }, [isStreaming, handleScroll, ...scrollWhen])

  // While the AI is generating (isStreaming=true) the typing animation grows
  // the DOM on every tick without touching the Zustand store, so the effect
  // above never re-fires. A rAF loop catches every frame of that growth and
  // keeps scrollTop pinned to scrollHeight — but only while the user hasn't
  // manually scrolled up (isAtBottom.current stays false once they do).
  useLayoutEffect(() => {
    if (!isStreaming) return

    let rafId: number
    const follow = () => {
      const container = containerRef.current
      if (container && isAtBottom.current) {
        container.scrollTop = container.scrollHeight
      }
      rafId = requestAnimationFrame(follow)
    }

    rafId = requestAnimationFrame(follow)
    return () => cancelAnimationFrame(rafId)
  }, [isStreaming])

  return {
    ref: containerRef,
    isScrollVisible,
    handleScroll,
    scrollToBottom,
  }
}
