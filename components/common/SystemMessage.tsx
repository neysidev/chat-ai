import Image from "next/image"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github.css"

import { Box, Flex } from "@chakra-ui/react"
import { useTypingEffect } from "@/hooks"

export default function SystemMessage({ children }: { children: string }) {
  const typedText = useTypingEffect(children)

  return (
    <Flex gap={2} alignItems="flex-start" maxW={{ base: "90%", sm: "80%" }}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={34}
        height={34}
        style={{ borderRadius: "9999px" }}
      />

      <Box
        className="system-message"
        overflowX="auto"
        bg="bg.panel"
        borderWidth="1px"
        borderColor="border"
        p={4}
        borderRadius="xl"
      >
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {typedText}
        </ReactMarkdown>
      </Box>
    </Flex>
  )
}
