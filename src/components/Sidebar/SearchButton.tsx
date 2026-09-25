"use client"

import { useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import SearchModal from "@/components/modals/SearchModal"
import Icon from "@/components/common/Icon"
import PageLink from "./PageLink"

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false)

  useHotkeys("shift+s", () => setIsOpen(true))

  return (
    <PageLink
      shortcut="S"
      label="Search"
      value="search"
      onOpen={() => setIsOpen(true)}
      modalContent={
        <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      }
      icon={<Icon name="search" />}
    />
  )
}
