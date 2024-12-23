import { useRouter } from "next/navigation"

import { useChatStore } from "@/stores/chatStore"
import { generateRandomId } from "@/utils/random"
import { Icon, Tooltip } from "@/components/common"

export default function SendMessageButton() {
  const router = useRouter()
  const { prompt, addMessage } = useChatStore()

  const onSubmit = () => {
    if (prompt.trim().length === 0) return

    const id = generateRandomId()
    addMessage(id, { role: "user", content: prompt })
    router.push(`/chat/${id}`)
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
