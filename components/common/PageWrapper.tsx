"use client"

import { Box } from "@chakra-ui/react"
import { usePathname } from "next/navigation"

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <Box key={pathname} animation="fade-in 0.4s ease-out">
      {children}
    </Box>
  )
}
