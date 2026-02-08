"use client"

import { Box, Flex } from "@chakra-ui/react"
import { usePathname } from "next/navigation"

import AddAttachment from "./AddAttachment"
import CharLengthMessage from "./CharLengthMessage"
import PromptInput from "./PromptInput"
import SendMessageButton from "./SendMessageButton"

export default function Chat() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <Box
      as="section"
      w="full"
      gap={2}
      bg="bg.panel"
      boxShadow="sm"
      borderRadius="xl"
      borderWidth="1px"
      borderColor="border"
      p={4}
      mt={isHomePage ? { base: 0, sm: 16 } : 0}
    >
      <PromptInput />

      <Flex as="footer" fontSize="sm" alignItems="flex-end" justifyContent="space-between">
        <AddAttachment />
        <Flex gap={2} alignItems="center">
          <CharLengthMessage />
          <SendMessageButton />
        </Flex>
      </Flex>
    </Box>
  )
}
