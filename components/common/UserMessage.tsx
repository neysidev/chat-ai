import Image from "next/image"
import { Box, Flex } from "@chakra-ui/react"

export default function UserMessage({ children }: { children: string }) {
  return (
    <Flex gap={2} alignItems="flex-start" maxW="80%" ml="auto">
      <Box
        bg="gray.200"
        borderWidth="1px"
        borderColor="gray.300"
        p={3}
        borderRadius="xl"
        _dark={{ bg: "gray.700", borderColor: "gray.600" }}
        dangerouslySetInnerHTML={{ __html: children }}
      />

      <Box display={{ base: "none", sm: "block" }}>
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={34}
          height={34}
          style={{ borderRadius: "9999px" }}
        />
      </Box>
    </Flex>
  )
}
