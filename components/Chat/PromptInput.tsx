import { useRef } from "react"
import { usePathname } from "next/navigation"

import { useChatStore } from "@/stores/chatStore"
import { maxLength, maxLines } from "@/fixtures/chats"

export default function PromptInput() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const { prompt, setPrompt } = useChatStore()

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustHeight = () => {
    const textarea = textareaRef.current
    if (!textarea) return

    textarea.style.height = "auto"

    const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight)
    const maxHeight = maxLines * lineHeight
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`
  }

  return (
    <textarea
      ref={textareaRef}
      rows={isHomePage ? maxLines : 1}
      value={prompt}
      onInput={adjustHeight}
      maxLength={maxLength}
      className="bg-transparent text-sm w-full resize-none text-neutral-900 dark:text-neutral-400 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none transition-colors duration-200"
      placeholder="Ask whatever you want..."
      onChange={e => setPrompt(e.target.value)}
    />
  )
}
