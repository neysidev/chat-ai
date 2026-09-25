import type { Metadata } from "next"
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
      <div className="py-16">
        <Header />
        <Search />
        <Categories />
      </div>
    </PageWrapper>
  )
}
