import { Box } from "@chakra-ui/react"
import { FC, PropsWithChildren } from "react"

const Kbd: FC<PropsWithChildren> = ({ children }) => (
  <Box
    as="kbd"
    bg="gray.700"
    borderRadius="md"
    borderWidth="1px"
    borderColor="gray.600"
    py={0.5}
    px={1.5}
  >
    {children}
  </Box>
)

export default Kbd
