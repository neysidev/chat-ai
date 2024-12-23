import Icon from "@/components/common/Icon"
import { IconName } from "@/components/common/icons"
import { useSettingsStore } from "@/stores/settingsStore"
import clsx from "clsx"

interface Item {
  name: string
  value: string
  icon: IconName
}

const items: Item[] = [
  { name: "General", value: "general", icon: "settings" },
  { name: "Personalized", value: "personalized", icon: "user" },
  { name: "Speech", value: "speech", icon: "microphone" },
  { name: "Data controls", value: "dataControls", icon: "server" },
  { name: "Security", value: "security", icon: "lock" },
]

export default function Tabs() {
  const { activeTab, setActiveTab } = useSettingsStore()

  return (
    <ul className="space-y-2 mb-8">
      {items.map(({ name, value, icon }) => (
        <li key={value}>
          <button
            onClick={() => setActiveTab(value)}
            className={clsx(
              "flex sm:space-x-2 w-full text-left transition font-medium items-center text-sm rounded-md p-2 sm:pr-4",
              activeTab === value
                ? "bg-neutral-100"
                : "opacity-75 hover:opacity-100"
            )}
          >
            <Icon name={icon} size={18} />
            <span className="hidden sm:block flex-1">{name}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
