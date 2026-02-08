import { Text } from "@chakra-ui/react"
import { maxLength } from "@/fixtures/chats"
import { useChatStore } from "@/stores/chatStore"

export default function CharLengthMessage() {
  const { prompt } = useChatStore()

  return (
    <Text as="span" ml="auto" color="fg.muted" fontWeight="medium">
      {prompt.length}/{maxLength}
    </Text>
  )
}
