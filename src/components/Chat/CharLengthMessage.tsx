import { maxLength } from "@/fixtures/chats"
import { useChatStore } from "@/stores/chatStore"

export default function CharLengthMessage() {
  const { prompt } = useChatStore()

  return (
    <span className="ml-auto text-neutral-500 font-medium">
      {prompt.length}/{maxLength}
    </span>
  )
}
