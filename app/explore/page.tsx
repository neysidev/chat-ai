import type { Metadata } from "next"
import { Box } from "@chakra-ui/react"
import { PageWrapper } from "@/components/common"
import Categories from "./_components/Categories"
import Header from "./_components/Header"
import Search from "./_components/Search"

export const metadata: Metadata = {
  title: "Explore",
}

export default function Explore() {
  return (
    <PageWrapper>
      <Box py={16}>
        <Header />
        <Search />
        <Categories />
      </Box>
    </PageWrapper>
  )
}
