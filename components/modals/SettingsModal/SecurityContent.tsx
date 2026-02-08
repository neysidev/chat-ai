import { Box, Button } from "@chakra-ui/react"

export default function SecurityContent() {
  return (
    <Box as="ul" divideY="1px" divideColor="border">
      <Box as="li" py={3} pt={0} display="flex" alignItems="flex-start" justifyContent="space-between" gap={8}>
        <Box gap={2}>
          <Box as="h4">Multi-factor authentication</Box>
          <Box as="p" fontSize="xs" color="fg.muted">
            Require an extra security challenge when logging in. If you are
            unable to pass this challenge, you will have the option to recover
            your account via email.
          </Box>
        </Box>
        <Button size="sm" variant="outline" borderRadius="full">
          Enable
        </Button>
      </Box>
      <Box as="li" py={3} display="flex" alignItems="flex-start" justifyContent="space-between" gap={8}>
        <Box gap={2}>
          <Box as="h4">Log out of all devices</Box>
          <Box as="p" fontSize="xs" color="fg.muted">
            Log out of all active sessions across all devices, including your
            current session. It may take up to 30 minutes for other devices to
            be logged out.
          </Box>
        </Box>
        <Button size="sm" variant="outline" borderRadius="full" minW={100}>
          Log out all
        </Button>
      </Box>
    </Box>
  )
}
