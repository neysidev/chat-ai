import { Box } from "@chakra-ui/react"
import { usePromptsStore } from "@/stores/promptsStore"
import PromptItem from "./PromptItem"

export default function PromptsList() {
  const { prompts } = usePromptsStore()

  return (
    <Box
      as="ul"
      mt={6}
      display="grid"
      gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gap={{ base: 2, md: 4 }}
    >
      {prompts.map(({ text, icon }, index) => (
        <PromptItem key={index} text={text} icon={icon} />
      ))}
    </Box>
  )
}
