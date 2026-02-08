import { Box, Button } from "@chakra-ui/react"

interface ScrollToBottomProps {
  isVisible: boolean
  onClick: () => void
}

export default function ScrollToBottom({
  isVisible,
  onClick,
}: ScrollToBottomProps) {
  return (
    <Box
      position="absolute"
      left={0}
      right={0}
      bottom="100%"
      transition="all 0.15s ease-in"
      display="flex"
      justifyContent="center"
      pb={5}
      pt={1}
      bgGradient="to-t"
      gradientFrom="bg"
      opacity={isVisible ? 1 : 0}
    >
      <Button
        onClick={onClick}
        bg="gray.900"
        color="white"
        p={1.5}
        borderRadius="full"
        transition="all 0.15s"
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "scale(1)" : "scale(0)"}
        pointerEvents={isVisible ? "auto" : "none"}
        aria-label="Scroll to bottom"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width={16}
          height={16}
        >
          <path
            fillRule="evenodd"
            d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Box>
  )
}
