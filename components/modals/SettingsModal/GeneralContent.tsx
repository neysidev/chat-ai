"use client"
import clsx from "clsx"
import { useState } from "react"
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Switch,
} from "@headlessui/react"

import Icon from "@/components/common/Icon"

const theme = [
  { name: "System", value: "system" },
  { name: "Dark", value: "dark" },
  { name: "Light", value: "light" },
]

export default function GeneralContent() {
  return (
    <ul className="divide-y">
      <ThemeSelect />
      <UseDataSwitch />
      <ArchiveButton />
      <DeleteButton />
    </ul>
  )
}

const ThemeSelect = () => {
  const [selected, setSelected] = useState(theme[2])

  return (
    <li className="py-3 pt-0 flex items-center justify-between">
      <span>Theme</span>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative block rounded-lg transition py-1.5 min-w-[120px] pr-8 pl-3 text-left text-sm/6 hover:bg-neutral-100",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
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
            "w-[var(--button-width)] rounded-xl border border-neutral-100 bg-white shadow-lg p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {theme.map(item => (
            <ListboxOption
              key={item.value}
              value={item}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none transition data-[focus]:bg-neutral-100"
            >
              <Icon
                name="check"
                className="invisible size-4 group-data-[selected]:visible"
              />
              <div className="text-sm/6 flex-1 text-black">{item.name}</div>
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
        className="group relative flex h-6 w-10 cursor-pointer rounded-full bg-neutral-200 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-[#10a37f]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-4"
        />
      </Switch>
    </li>
  )
}

const ArchiveButton = () => {
  return (
    <li className="py-3 flex items-center justify-between">
      <span>Archive all chats</span>
      <button className="border min-w-[95px] px-3 py-1.5 rounded-full transition hover:bg-neutral-100">
        Archive all
      </button>
    </li>
  )
}

const DeleteButton = () => {
  return (
    <li className="py-3 flex items-center justify-between">
      <span>Delete all chats</span>
      <button className="border min-w-[95px] border-red-600 text-red-600 px-3 py-1.5 rounded-full transition hover:bg-red-50">
        Delete all
      </button>
    </li>
  )
}
