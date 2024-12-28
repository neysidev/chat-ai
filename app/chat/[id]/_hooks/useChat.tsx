import { useChatStore } from "@/stores/chatStore"

export default function useChat({ chatId }: { chatId: string }) {
  const { chats } = useChatStore()

  const chat = chats.find(c => c.id === chatId)

  return {
    messages: chat?.messages || [],
    isLoading: chat?.isLoading || false,
  }
}
