import { Box, Button } from "@chakra-ui/react"

export default function DataControlsContent() {
  return (
    <Box as="ul" divideY="1px" divideColor="border">
      <Box as="li" py={3} pt={0} display="flex" alignItems="center" justifyContent="space-between">
        <Box as="span">Shared links</Box>
        <Button size="sm" variant="outline" borderRadius="full">
          Manage
        </Button>
      </Box>
      <Box as="li" py={3} display="flex" alignItems="center" justifyContent="space-between">
        <Box as="span">Export data</Box>
        <Button size="sm" variant="outline" borderRadius="full">
          Export
        </Button>
      </Box>
      <Box as="li" py={3} display="flex" alignItems="center" justifyContent="space-between">
        <Box as="span">Delete account</Box>
        <Button
          size="sm"
          borderRadius="full"
          borderWidth="1px"
          borderColor="red.600"
          bg="red.600"
          color="white"
          _hover={{ bg: "red.50", color: "red.600" }}
          _dark={{
            bg: "transparent",
            borderColor: "red.400",
            color: "red.400",
            _hover: { bg: "red.950", color: "red.500" },
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  )
}
