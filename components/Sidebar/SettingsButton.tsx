"use client"

import { useState } from "react"
import Icon from "../common/Icon"
import SettingsModal from "../modals/SettingsModal"
import PageLink from "./PageLink"

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <PageLink
      label="Settings"
      value="settings"
      onOpen={() => setIsOpen(true)}
      modalContent={
        <SettingsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      }
      icon={<Icon name="settings" />}
    />
  )
}
