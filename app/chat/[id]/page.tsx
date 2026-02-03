"use client"

import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import Chat from "@/components/Chat"
import ChatNote from "@/components/Chat/ChatNote"
import Messages from "@/components/common/Messages"
import ScrollToBottom from "@/components/Chat/ScrollToBottom"
import { sendChatCompletion } from "@/services/chat"
import { useChatStore } from "@/stores/chatStore"

import useChat from "./_hooks/useChat"
import PageWrapper from "@/app/page-wrapper"

export default function ChatPage() {
  const { id: chatId } = useParams<{ id: string }>()
  const { isLoading, messages } = useChat({ chatId })
  const { addMessage, setMessageLoading } = useChatStore()
  const fetchingRef = useRef(false)

  const messagesRef = useRef<HTMLDivElement>(null)

  const [isScrollVisible, setIsScrollVisible] = useState(false)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

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

  const handleScroll = () => {
    const container = messagesRef.current
    if (!container) return

    const { scrollHeight, scrollTop, clientHeight } = container
    setIsScrollVisible(scrollTop + 20 + clientHeight < scrollHeight)
  }

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <PageWrapper>
      <div
        style={{ height: "calc(100vh - 32px)" }}
        className="flex flex-col justify-between"
      >
        <div
          ref={messagesRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto no-scrollbar"
        >
          <Messages messages={messages} isLoading={isLoading} />
        </div>
        <div className="relative">
          <ScrollToBottom
            isVisible={isScrollVisible}
            onClick={scrollToBottom}
          />
          <Chat />
          <ChatNote />
        </div>
      </div>
    </PageWrapper>
  )
}
