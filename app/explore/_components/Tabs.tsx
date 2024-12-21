import clsx from "clsx"
import { useCallback } from "react"

import { TABS } from "@/fixtures/explore"
import { useExploreStore } from "@/stores/exploreStore"

export default function Tabs() {
  const { activeTab } = useExploreStore()

  const handleScrollIntoView = useCallback((tabId: string) => {
    const section = document.getElementById(tabId)
    section?.scrollIntoView({ behavior: "smooth", block: "center" })
  }, [])

  return (
    <div className="flex space-x-1">
      {TABS.map(({ label, value }, index) => (
        <button
          key={index}
          onClick={() => handleScrollIntoView(value)}
          className={clsx(
            "px-3 py-1.5 text-sm text-neutral-600 border transition rounded-xl font-medium select-none cursor-pointer",
            activeTab === value
              ? "bg-white shadow-sm border-neutral-100"
              : "border-transparent hover:bg-neutral-50 hover:shadow-sm"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
