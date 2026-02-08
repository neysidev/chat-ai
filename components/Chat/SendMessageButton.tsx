import { Button } from "@chakra-ui/react"
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
      <Button
        onClick={onSubmit}
        borderRadius="xl"
        p={1.5}
        color="white"
        bgGradient="to-t"
        gradientFrom="purple.900"
        gradientTo="purple.600"
        _dark={{
          gradientFrom: "purple.700",
          gradientTo: "purple.400",
        }}
      >
        <Icon name="arrowUp" size={16} strokeWidth={2} />
      </Button>
    </Tooltip>
  )
}
