import Image from "next/image"
import { Box, Flex } from "@chakra-ui/react"

export default function LoadingMessage() {
  return (
    <Flex gap={2} alignItems="center" maxW={{ base: "90%", sm: "80%" }}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={34}
        height={34}
        style={{ borderRadius: "9999px" }}
      />

      <Box
        as="span"
        bgGradient="to-r"
        gradientFrom="gray.300"
        gradientVia="gray.900"
        gradientTo="gray.300"
        bgClip="text"
        color="transparent"
        animation="shine 5s infinite linear"
      >
        Loading...
      </Box>
    </Flex>
  )
}
