"use client"

import { Box, Button } from "@chakra-ui/react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { SwitchRoot, SwitchControl, SwitchThumb } from "@chakra-ui/react"

const THEME_OPTIONS = [
  { name: "System", value: "system" },
  { name: "Dark", value: "dark" },
  { name: "Light", value: "light" },
] as const

export default function GeneralContent() {
  return (
    <Box as="ul" divideY="1px" divideColor="border">
      <ThemeSelect />
      <UseDataSwitch />
      <ArchiveButton />
      <DeleteButton />
    </Box>
  )
}

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const current = (theme ?? "system") as (typeof THEME_OPTIONS)[number]["value"]

  if (!mounted) {
    return (
      <Box as="li" py={3} pt={0} display="flex" alignItems="center" justifyContent="space-between">
        <Box as="span">Theme</Box>
        <Box as="span" minW={120} py={1.5} pr={8} pl={3} fontSize="sm" color="fg.muted">
          System
        </Box>
      </Box>
    )
  }

  return (
    <Box as="li" py={3} pt={0} display="flex" alignItems="center" justifyContent="space-between">
      <Box as="span">Theme</Box>
      <select
        value={current}
        onChange={e => setTheme(e.target.value as "light" | "dark" | "system")}
        style={{
          minWidth: 120,
          padding: "6px 32px 6px 12px",
          fontSize: "0.875rem",
          borderRadius: "0.5rem",
          background: "transparent",
          color: "var(--chakra-colors-fg)",
          border: "1px solid var(--chakra-colors-border)",
        }}
      >
        {THEME_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
    </Box>
  )
}

const UseDataSwitch = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Box as="li" py={3} display="flex" alignItems="center" justifyContent="space-between">
      <Box as="span">Always use my data</Box>
      <SwitchRoot checked={enabled} onCheckedChange={e => setEnabled(e.checked)}>
        <SwitchControl
          bg="bg.muted"
          _checked={{ bg: "green.600" }}
          w={10}
          h={6}
          borderRadius="full"
        >
          <SwitchThumb />
        </SwitchControl>
      </SwitchRoot>
    </Box>
  )
}

const ArchiveButton = () => {
  return (
    <Box as="li" py={3} display="flex" alignItems="center" justifyContent="space-between">
      <Box as="span">Archive all chats</Box>
      <Button
        variant="outline"
        size="sm"
        minW={95}
        borderRadius="full"
        borderColor="border.emphasized"
        _hover={{ bg: "bg.muted" }}
      >
        Archive all
      </Button>
    </Box>
  )
}

const DeleteButton = () => {
  return (
    <Box as="li" py={3} display="flex" alignItems="center" justifyContent="space-between">
      <Box as="span">Delete all chats</Box>
      <Button
        variant="outline"
        size="sm"
        minW={95}
        borderRadius="full"
        borderColor="red.600"
        color="red.600"
        _hover={{ bg: "red.50" }}
        _dark={{
          borderColor: "red.400",
          color: "red.400",
          _hover: { bg: "red.950", color: "red.500" },
        }}
      >
        Delete all
      </Button>
    </Box>
  )
}
