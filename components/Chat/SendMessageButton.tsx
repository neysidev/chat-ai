import { usePathname, useRouter } from "next/navigation"

import { useChatStore } from "@/stores/chatStore"
import { generateRandomId } from "@/utils/random"
import { Icon, Tooltip } from "@/components/common"

export default function SendMessageButton() {
  const router = useRouter()
  const pathname = usePathname()
  const { prompt, createNewChat, addMessage, setMessageLoading, setPrompt } =
    useChatStore()

  const onSubmit = () => {
    if (prompt.trim().length === 0) return

    const trimmed = prompt.trim()
    setPrompt("")

    const chatIdFromPath = pathname.startsWith("/chat/")
      ? pathname.split("/")[2]
      : null

    if (chatIdFromPath) {
      addMessage(chatIdFromPath, { role: "user", content: trimmed })
      setMessageLoading(chatIdFromPath, true)
    } else {
      const id = generateRandomId()
      createNewChat(id, trimmed, true, [{ role: "user", content: trimmed }])
      router.push(`/chat/${id}`)
    }
  }

  return (
    <Tooltip id="send" content="Send" place="top">
      <button
        onClick={onSubmit}
        className="rounded-xl p-1.5 text-white bg-gradient-to-t from-purple-900 to-purple-600"
      >
        <Icon name="arrowUp" size={16} strokeWidth={2} />
      </button>
    </Tooltip>
  )
}
