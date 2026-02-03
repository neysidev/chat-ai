"use client"

import { useParams } from "next/navigation"

import { useMessagesScroll } from "@/hooks"
import Chat from "@/components/Chat"
import ChatNote from "@/components/Chat/ChatNote"
import Messages from "@/components/common/Messages"
import ScrollToBottom from "@/components/Chat/ScrollToBottom"
import PageWrapper from "@/app/page-wrapper"

import useChat from "./_hooks/useChat"
import useChatCompletion from "./_hooks/useChatCompletion"

export default function ChatPage() {
  const { id: chatId } = useParams<{ id: string }>()
  const { isLoading, messages } = useChat({ chatId })

  useChatCompletion({ chatId, messages, isLoading })

  const {
    ref: messagesRef,
    isScrollVisible,
    handleScroll,
    scrollToBottom,
  } = useMessagesScroll([messages])

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
