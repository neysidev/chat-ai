import { Box } from "@chakra-ui/react"
import { Message } from "@/stores/chatStore"
import UserMessage from "./UserMessage"
import SystemMessage from "./SystemMessage"
import LoadingMessage from "./LoadingMessage"

interface MessagesProps {
  messages: Message[]
  isLoading: boolean
}

export default function Messages({ messages, isLoading }: MessagesProps) {
  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      flex={1}
      pb={4}
      fontSize="sm"
      h="full"
      gap={4}
      justifyContent="flex-end"
    >
      {messages.map(({ role, content }, index) =>
        role === "user" ? (
          <UserMessage key={index}>{content}</UserMessage>
        ) : (
          <SystemMessage key={index}>{content}</SystemMessage>
        )
      )}

      {isLoading && <LoadingMessage />}
    </Box>
  )
}
