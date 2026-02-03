import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Manages scroll behavior for a messages container:
 * - Ref for the scrollable element
 * - Auto scroll to bottom when content changes
 * - Visibility of "scroll to bottom" button
 * - Programmatic scroll to bottom
 *
 * @param scrollWhen - Dependencies that trigger scroll-to-bottom (e.g. [messages])
 */
export function useMessagesScroll(scrollWhen: unknown[] = []) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrollVisible, setIsScrollVisible] = useState(false)

  const handleScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const { scrollHeight, scrollTop, clientHeight } = container
    setIsScrollVisible(scrollTop + 20 + clientHeight < scrollHeight)
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
    if (container) {
      container.scrollTop = container.scrollHeight
      handleScroll()
    }
  }, [handleScroll, ...scrollWhen])

  return {
    ref: containerRef,
    isScrollVisible,
    handleScroll,
    scrollToBottom,
  }
}
