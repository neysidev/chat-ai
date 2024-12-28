"use client"

import { useEffect, useRef, useState } from "react"

import { MESSAGES } from "@/fixtures/chats"
import Chat from "@/components/Chat"
import ChatNote from "@/components/Chat/ChatNote"
import Messages from "@/components/common/Messages"
import ScrollToBottom from "@/components/Chat/ScrollToBottom"

export default function ChatPage() {
  const messagesRef = useRef<HTMLDivElement>(null)

  const [isScrollVisible, setIsScrollVisible] = useState(false)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [])

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
    <div
      style={{ height: "calc(100vh - 32px)" }}
      className="flex flex-col justify-between"
    >
      <div
        ref={messagesRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto no-scrollbar"
      >
        <Messages messages={MESSAGES} />
      </div>
      <div className="relative">
        <ScrollToBottom isVisible={isScrollVisible} onClick={scrollToBottom} />
        <Chat />
        <ChatNote />
      </div>
    </div>
  )
}
