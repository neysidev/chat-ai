import { Box, Button } from "@chakra-ui/react"
import Icon from "./Icon"

export default function MenuButton() {
  return (
    <Box
      position="sticky"
      top={0}
      p={4}
      pb={2}
      zIndex={10}
      bg="bg"
      display={{ base: "block", sm: "none" }}
    >
      <Button variant="ghost" color="fg" bg="bg" _hover={{ color: "fg.muted" }} _focus={{ outline: "none" }}>
        <Icon name="menu" />
      </Button>
    </Box>
  )
}
