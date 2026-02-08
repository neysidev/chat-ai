import Link from "next/link"
import { Box } from "@chakra-ui/react"
import { useHotkeys } from "react-hotkeys-hook"
import { useRouter } from "next/navigation"

import Tooltip from "../common/Tooltip"
import Kbd from "../common/Kbd"

export default function NewChat() {
  const router = useRouter()

  useHotkeys("shift+n", () => router.push("/"))

  return (
    <Tooltip
      id="new-chat-tooltip"
      content={
        <Box display="flex" gap={1} alignItems="center">
          <Box as="span" fontWeight="medium">
            New Chat
          </Box>{" "}
          <Box as="span" fontSize="xs">
            <Kbd>shift</Kbd>+<Kbd>N</Kbd>
          </Box>
        </Box>
      }
      place="right"
    >
      <Link href="/">
        <Box
          as="span"
          display="block"
          bg="bg.panel"
          borderRadius="xl"
          boxShadow="sm"
          borderWidth="1px"
          borderColor="border"
          p={1}
          transition="colors 0.2s"
          _hover={{ bg: "bg.muted" }}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            style={{ color: "var(--chakra-colors-fg-muted)" }}
          >
            <path
              d="M6 12H18"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18V6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
      </Link>
    </Tooltip>
  )
}
