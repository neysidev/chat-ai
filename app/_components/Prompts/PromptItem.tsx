import { Box, Flex } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

import { useChatStore } from "@/stores/chatStore"
import { generateRandomId } from "@/utils/random"
import { usePromptsStore } from "@/stores/promptsStore"

interface PromptItemProps {
  text: string
  icon: React.ReactNode
}

export default function PromptItem({ text, icon }: PromptItemProps) {
  const router = useRouter()

  const { createNewChat } = useChatStore()
  const { isRefreshing } = usePromptsStore()

  const onClick = () => {
    const id = generateRandomId()
    createNewChat(id, text, true, [{ role: "user", content: text }])

    router.push(`/chat/${id}`)
  }

  return (
    <Box
      as="li"
      title={text}
      onClick={onClick}
      fontSize="xs"
      borderWidth="1px"
      borderColor="border"
      color="fg.muted"
      borderRadius="xl"
      p={4}
      display="flex"
      flexDirection="column"
      gap={{ base: 2, md: 6 }}
      fontWeight="medium"
      userSelect="none"
      cursor={isRefreshing ? "not-allowed" : "pointer"}
      transition="all"
      _hover={
        isRefreshing
          ? undefined
          : {
              bg: "bg.panel",
              boxShadow: "sm",
            }
      }
    >
      <Box as="span" flex={1} lineClamp={2}>
        {text}
      </Box>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width={20}
        height={20}
        style={{ flexShrink: 0, color: "var(--chakra-colors-fg-muted)" }}
      >
        {icon}
      </svg>
    </Box>
  )
}
