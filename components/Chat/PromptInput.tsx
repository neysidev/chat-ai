import { Textarea } from "@chakra-ui/react"
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
    <Textarea
      ref={textareaRef}
      rows={isHomePage ? maxLines : 1}
      value={prompt}
      onInput={adjustHeight}
      maxLength={maxLength}
      bg="transparent"
      fontSize="sm"
      w="full"
      resize="none"
      color="fg"
      placeholder="Ask whatever you want..."
      _placeholder={{ color: "fg.muted" }}
      onChange={e => setPrompt(e.target.value)}
      border="none"
      outline="none"
      p={0}
      minH="unset"
    />
  )
}
