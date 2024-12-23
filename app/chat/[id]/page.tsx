"use client"

import { useEffect, useRef } from "react"

import { MESSAGES } from "@/fixtures/chats"
import Chat from "@/components/Chat"
import ChatNote from "@/components/Chat/ChatNote"
import Messages from "@/components/common/Messages"

export default function ChatPage() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div
      style={{ height: "calc(100vh - 32px)" }}
      className="flex flex-col justify-between"
    >
      <div className="flex-1 overflow-y-auto">
        <Messages messages={MESSAGES} />
        <div ref={messagesEndRef} />
      </div>
      <div className="space-y-4 bg-neutral-100">
        <Chat />
        <ChatNote />
      </div>
    </div>
  )
}
