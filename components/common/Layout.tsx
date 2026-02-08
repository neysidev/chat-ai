"use client"

import { Box, Flex } from "@chakra-ui/react"
import { usePathname } from "next/navigation"
import { FC, PropsWithChildren, useEffect } from "react"

import { useChatStore } from "@/stores/chatStore"
import Sidebar from "../Sidebar"
import MenuButton from "./MenuButton"

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    useChatStore.persist.rehydrate()
  }, [])

  return (
    <Flex h="100vh" divideX="1px" borderColor="border" bg="gray.100">
      <Sidebar />

      <Box
        as="main"
        flex="1"
        p={{ base: 0, sm: 4 }}
        maxH="100vh"
        display="flex"
        flexDirection="column"
        overflowY="auto"
        transition="colors 0.2s"
        {...(isHomePage && {
          sx: { "@media (min-width: 640px)": { placeItems: "center" } },
        })}
      >
        <MenuButton />
        <Box
          as="section"
          maxW="48rem"
          minW={{ lg: "48rem" }}
          p={4}
          sx={{ "@media (min-width: 640px)": { p: 0 } }}
          mx="auto"
          flex="1"
          position="relative"
          {...(isHomePage && {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            sx: {
              "@media (min-width: 640px)": { h: "auto" },
            },
          })}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default Layout
