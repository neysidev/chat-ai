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
    <section className="flex flex-col flex-1 pb-4 text-sm h-full space-y-4 justify-end">
      {messages.map(({ role, content }, index) =>
        role === "user" ? (
          <UserMessage key={index}>{content}</UserMessage>
        ) : (
          <SystemMessage key={index}>{content}</SystemMessage>
        )
      )}

      {isLoading && <LoadingMessage />}
    </section>
  )
}
