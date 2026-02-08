"use client"

import { Box } from "@chakra-ui/react"
import { useParams } from "next/navigation"

import { PageWrapper } from "@/components/common"
import { useChat, useChatCompletion, useMessagesScroll } from "@/hooks"
import Chat from "@/components/Chat"
import ChatNote from "@/components/Chat/ChatNote"
import Messages from "@/components/common/Messages"
import ScrollToBottom from "@/components/Chat/ScrollToBottom"

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
      <Box
        h="calc(100vh - 32px)"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          ref={messagesRef}
          onScroll={handleScroll}
          flex={1}
          overflowY="auto"
          className="no-scrollbar"
        >
          <Messages messages={messages} isLoading={isLoading} />
        </Box>
        <Box position="relative">
          <ScrollToBottom
            isVisible={isScrollVisible}
            onClick={scrollToBottom}
          />
          <Chat />
          <ChatNote />
        </Box>
      </Box>
    </PageWrapper>
  )
}
