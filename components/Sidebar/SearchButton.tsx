"use client"

import { useState } from "react"
import Icon from "../common/Icon"
import SearchModal from "../modals/SearchModal"
import PageLink from "./PageLink"

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <PageLink
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
