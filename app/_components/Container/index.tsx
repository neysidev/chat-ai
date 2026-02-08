import { Box } from "@chakra-ui/react"
import Header from "../Header"
import Prompts from "../Prompts"

export default function Container() {
  return (
    <Box
      w="full"
      flex={1}
      mb={8}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Header />
      <Prompts />
    </Box>
  )
}
