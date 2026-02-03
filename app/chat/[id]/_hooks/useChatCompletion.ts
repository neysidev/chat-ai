import { useEffect, useRef } from "react"

import { sendChatCompletion } from "@/services/chat"
import type { Message } from "@/stores/chatStore"
import { useChatStore } from "@/stores/chatStore"

interface UseChatCompletionParams {
  chatId: string | undefined
  messages: Message[]
  isLoading: boolean
}

/**
 * Sends chat completion when the last message is from the user.
 * Updates the store with the assistant response or error.
 */
export default function useChatCompletion({
  chatId,
  messages,
  isLoading,
}: UseChatCompletionParams) {
  const { addMessage, setMessageLoading } = useChatStore()
  const fetchingRef = useRef(false)

  useEffect(() => {
    if (!chatId || !messages.length || !isLoading || fetchingRef.current) return

    const lastMessage = messages[messages.length - 1]
    if (lastMessage?.role !== "user") return

    fetchingRef.current = true
    sendChatCompletion({ messages })
      .then(result => {
        addMessage(chatId, { role: "assistant", content: result.content })
      })
      .catch(err => {
        const message =
          err instanceof Error ? err.message : "Something went wrong"
        addMessage(chatId, {
          role: "assistant",
          content: `Sorry, something went wrong: ${message}`,
        })
      })
      .finally(() => {
        setMessageLoading(chatId, false)
        fetchingRef.current = false
      })
  }, [chatId, messages, isLoading, addMessage, setMessageLoading])
}
