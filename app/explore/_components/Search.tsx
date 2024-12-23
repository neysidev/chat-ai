"use client"

import { Icon } from "@/components/common"
import { useExploreStore } from "@/stores/exploreStore"

export default function Search() {
  const { search, setSearch } = useExploreStore()

  return (
    <div
      data-title="Search"
      className="sticky -top-4 py-4 space-y-4 bg-neutral-100"
    >
      <div className="relative">
        <label htmlFor="search-input" className="sr-only">
          Search GPTs
        </label>
        <input
          aria-label="Search GPTs"
          id="search-input"
          type="text"
          placeholder="Search GPTs"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border py-2 w-full pl-9 pr-4 rounded-xl bg-transparent transition focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <Icon
          size={18}
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none"
        />
      </div>
    </div>
  )
}
