import { Message } from "@/stores/chatStore"
import UserMessage from "./UserMessage"
import SystemMessage from "./SystemMessage"

interface MessagesProps {
  messages: Message[]
}

export default function Messages({ messages }: MessagesProps) {
  return (
    <section className="flex flex-col flex-1 py-4 text-sm space-y-4 justify-end">
      {messages.map(({ role, content }, index) =>
        role === "user" ? (
          <UserMessage key={index}>{content}</UserMessage>
        ) : (
          <SystemMessage key={index}>{content}</SystemMessage>
        )
      )}
    </section>
  )
}
