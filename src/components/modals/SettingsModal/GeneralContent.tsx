"use client"

import clsx from "clsx"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Switch,
} from "@headlessui/react"

import Icon from "@/components/common/Icon"

const THEME_OPTIONS = [
  { name: "System", value: "system" },
  { name: "Dark", value: "dark" },
  { name: "Light", value: "light" },
] as const

export default function GeneralContent() {
  return (
    <ul className="divide-y dark:divide-neutral-700">
      <ThemeSelect />
      <UseDataSwitch />
      <ArchiveButton />
      <DeleteButton />
    </ul>
  )
}

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const current = (theme ?? "system") as (typeof THEME_OPTIONS)[number]["value"]
  const selected =
    THEME_OPTIONS.find(o => o.value === current) ?? THEME_OPTIONS[0]

  if (!mounted) {
    return (
      <li className="py-3 pt-0 flex items-center justify-between">
        <span>Theme</span>
        <span className="min-w-[120px] py-1.5 pr-8 pl-3 text-sm/6 text-neutral-500 dark:text-neutral-400">
          System
        </span>
      </li>
    )
  }

  return (
    <li className="py-3 pt-0 flex items-center justify-between">
      <span>Theme</span>
      <Listbox
        value={selected}
        onChange={option =>
          setTheme(option.value as "light" | "dark" | "system")
        }
      >
        <ListboxButton
          className={clsx(
            "relative block rounded-lg transition-colors duration-200 py-1.5 min-w-[120px] pr-8 pl-3 text-left text-sm/6 hover:bg-neutral-100 dark:hover:bg-neutral-800",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
          )}
        >
          {selected.name}
          <Icon
            name="chevronDown"
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom end"
          transition
          className={clsx(
            "w-[var(--button-width)] rounded-xl border border-neutral-100 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-lg p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none transition-colors duration-200",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
          )}
        >
          {THEME_OPTIONS.map(item => (
            <ListboxOption
              key={item.value}
              value={item}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none transition-colors duration-200 data-[focus]:bg-neutral-100 dark:data-[focus]:bg-neutral-700"
            >
              <Icon
                name="check"
                className="invisible size-4 group-data-[selected]:visible"
              />
              <div className="text-sm/6 flex-1 text-black dark:text-neutral-100">
                {item.name}
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </li>
  )
}

const UseDataSwitch = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <li className="py-3 flex items-center justify-between">
      <span>Always use my data</span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group relative flex h-6 w-10 cursor-pointer rounded-full bg-neutral-200 dark:bg-neutral-700 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-[#10a37f]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white dark:bg-neutral-200 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
        />
      </Switch>
    </li>
  )
}

const ArchiveButton = () => {
  return (
    <li className="py-3 flex items-center justify-between">
      <span>Archive all chats</span>
      <button className="border border-neutral-300 dark:border-neutral-600 min-w-[95px] px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">
        Archive all
      </button>
    </li>
  )
}

const DeleteButton = () => {
  return (
    <li className="py-3 flex items-center justify-between">
      <span>Delete all chats</span>
      <button className="border min-w-[95px] border-red-600 text-red-600 px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-red-50 dark:hover:bg-red-950/50 dark:border-red-400 dark:text-red-400 dark:hover:text-red-500">
        Delete all
      </button>
    </li>
  )
}
