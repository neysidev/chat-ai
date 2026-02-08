import { Box, Heading, Text } from "@chakra-ui/react"

export default function Header() {
  return (
    <Box
      as="header"
      display="flex"
      flexDirection="column"
      gap={{ base: 2, sm: 1 }}
    >
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "4xl" }}
        lineHeight={{ base: 1 }}
        fontWeight="semibold"
        bgGradient="to-l"
        gradientFrom="purple.700"
        gradientVia="pink.600"
        gradientTo="gray.900"
        _dark={{
          gradientFrom: "purple.900",
          gradientVia: "purple.700",
          gradientTo: "purple.300",
        }}
        bgClip="text"
        color="transparent"
      >
        Hi there, Mety
        <br />
        What would like to know?
      </Heading>
      <Text fontSize={{ base: "sm", sm: "md" }} color="fg.muted">
        Use one of the most common prompts
        <br />
        below or use your own to begin.
      </Text>
    </Box>
  )
}
