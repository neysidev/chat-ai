import { Box, Heading, Text } from "@chakra-ui/react"

export default function Header() {
  return (
    <Box
      as="header"
      gap={2}
      textAlign="center"
      w={{ base: "full", sm: "4/5", md: "2/3" }}
      mx="auto"
    >
      <Heading as="h1" size={{ base: "lg", md: "xl" }} fontWeight="semibold">
        Explore
      </Heading>
      <Text fontSize={{ base: "sm", md: "md" }} color="fg.muted">
        Discover and create custom versions of ChatGPT that combine
        instructions, extra knowledge, and any combination of skills.
      </Text>
    </Box>
  )
}
