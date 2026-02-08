"use client"

import Link from "next/link"
import { Box, Heading, Text } from "@chakra-ui/react"

import { useChatStore } from "@/stores/chatStore"
import { PageWrapper } from "@/components/common"

export default function HistoryPage() {
  const { chats } = useChatStore()
  const orderedChats = [...chats].reverse()

  return (
    <PageWrapper>
      <Box py={16}>
        <Box
          as="header"
          gap={2}
          textAlign="center"
          w={{ base: "full", sm: "4/5", md: "2/3" }}
          mx="auto"
          mb={10}
        >
          <Heading as="h1" size={{ base: "lg", md: "xl" }} fontWeight="semibold">
            History
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color="fg.muted">
            Your recent conversations. Click to continue where you left off.
          </Text>
        </Box>

        {orderedChats.length === 0 ? (
          <Box textAlign="center" py={12} color="fg.muted">
            <Text fontWeight="medium">No conversations yet</Text>
            <Text fontSize="sm" mt={1}>
              Start a new chat from home — it will appear here.
            </Text>
            <Link href="/">
              <Text
                as="span"
                display="inline-block"
                mt={4}
                fontSize="sm"
                fontWeight="medium"
                color="fg"
                _hover={{ textDecoration: "underline" }}
              >
                Go to Home
              </Text>
            </Link>
          </Box>
        ) : (
          <Box as="ul" gap={2}>
            {orderedChats.map(chat => (
              <Box as="li" key={chat.id}>
                <Link href={`/chat/${chat.id}`}>
                  <Box
                    display="block"
                    borderRadius="xl"
                    p={4}
                    borderWidth="1px"
                    borderColor="border"
                    bg="bg.panel"
                    _hover={{ borderColor: "transparent", boxShadow: "sm" }}
                  >
                    <Text fontWeight="medium" lineClamp={1}>
                      {chat.title || "New chat"}
                    </Text>
                    <Text fontSize="xs" color="fg.muted" mt={0.5} display="block">
                      {chat.messages.length} message
                      {chat.messages.length !== 1 ? "s" : ""}
                    </Text>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </PageWrapper>
  )
}
