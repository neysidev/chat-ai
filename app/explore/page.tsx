"use client"

import { useEffect } from "react"

import { tabIds } from "@/fixtures/explore"
import { useExploreStore } from "@/stores/exploreStore"

import Groups from "./_components/Groups"
import Header from "./_components/Header"
import Search from "./_components/Search"
import Tabs from "./_components/Tabs"

export default function Explore() {
  const { setActiveTab } = useExploreStore()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id)
          }
        })
      },
      { root: null, threshold: 1 }
    )

    tabIds.forEach(id => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="py-16">
      <Header />
      <div className="sticky top-0 pt-8 py-4 space-y-4 bg-neutral-100">
        <Search />
        <Tabs />
      </div>
      <Groups />
    </div>
  )
}
