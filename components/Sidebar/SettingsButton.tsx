"use client"

import { useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import SettingsModal from "../modals/SettingsModal"
import Icon from "../common/Icon"
import PageLink from "./PageLink"

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false)

  useHotkeys("shift+t", () => setIsOpen(true))

  return (
    <PageLink
      shortcut="T"
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
