import Link from "next/link"
import { Box, Button } from "@chakra-ui/react"
import Tooltip from "../common/Tooltip"
import Kbd from "../common/Kbd"

interface PageLinkProps {
  href?: string
  modalContent?: React.ReactElement
  onOpen?: () => void
  shortcut: string

  label: string
  value: string
  icon: React.ReactElement
}

const linkStyles = {
  display: "inline-flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  color: "fg.muted",
  p: 1.5,
  _hover: { color: "fg" },
}

export default function PageLink({
  href,
  label,
  value,
  icon,
  onOpen,
  shortcut,
  modalContent,
}: PageLinkProps) {
  return (
    <Tooltip
      id={`${value}-tooltip`}
      content={
        <Box display="flex" gap={1} alignItems="center">
          <Box as="span" fontWeight="medium">
            {label}
          </Box>{" "}
          <Box as="span" fontSize="xs">
            <Kbd>shift</Kbd>+<Kbd>{shortcut}</Kbd>
          </Box>
        </Box>
      }
      place="right"
    >
      {href ? (
        <Link href={href}>
          <Box {...linkStyles}>{icon}</Box>
        </Link>
      ) : (
        <>
          <Button variant="ghost" onClick={onOpen} {...linkStyles}>
            {icon}
          </Button>
          {modalContent}
        </>
      )}
    </Tooltip>
  )
}
