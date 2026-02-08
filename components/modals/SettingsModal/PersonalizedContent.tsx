import { Box } from "@chakra-ui/react"

export default function PersonalizedContent() {
  return (
    <Box gap={3}>
      <Box as="h4" fontWeight="medium">
        Memory
      </Box>
      <Box as="p" color="fg.muted" fontSize="xs">
        ChatGPT will become more helpful as you chat, picking up on details and
        preferences to tailor its responses to you.
      </Box>
      <Box as="p" color="fg.muted" fontSize="xs">
        To understand what ChatGPT remembers or teach it something new, just
        chat with it:
      </Box>
      <Box
        as="ul"
        color="fg.muted"
        listStyleType="disc"
        listStylePosition="inside"
        fontSize="xs"
      >
        <li>"Remember that I like concise responses."</li>
        <li>"I just got a puppy!"</li>
        <li>"What do you remember about me?"</li>
        <li>"Where did we leave off on my last project?"</li>
      </Box>
    </Box>
  )
}
