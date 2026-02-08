import { Box, Button } from "@chakra-ui/react"
import Icon from "@/components/common/Icon"

export default function SpeechContent() {
  return (
    <Box as="ul" divideY="1px" divideColor="border">
      <Box as="li" py={3} pt={0} display="flex" alignItems="center" justifyContent="space-between" gap={8}>
        <Box as="h4">Voice</Box>
        <Box display="flex">
          <Box borderRightWidth="1px" borderColor="border" pr={2} mr={2}>
            <Button size="sm" variant="ghost" gap={1}>
              <Icon name="play" size={14} />
              Play
            </Button>
          </Box>
          <Button size="sm" variant="ghost" gap={1}>
            <Box as="span">Sol</Box>
            <Icon name="chevronDown" size={14} />
          </Button>
        </Box>
      </Box>
      <Box as="li" py={3} gap={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box as="h4">Main Language</Box>
          <Button size="sm" variant="ghost" gap={1}>
            <Box as="span">Auto-Detect</Box>
            <Icon name="chevronDown" size={14} />
          </Button>
        </Box>
        <Box as="p" fontSize="xs" pr={4} color="fg.muted">
          For best results, select the language you mainly speak. If it's not
          listed, it may still be supported via auto-detection.
        </Box>
      </Box>
    </Box>
  )
}
