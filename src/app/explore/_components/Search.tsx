"use client"

import { Icon } from "@/components/common"
import { useExploreStore } from "@/stores/exploreStore"

export default function Search() {
  const { search, setSearch } = useExploreStore()

  return (
    <section className="sticky -top-4 pt-4 space-y-4 bg-neutral-100 dark:bg-neutral-900">
      <div className="absolute left-0 right-0 top-full transition-all ease-in duration-150 flex justify-center pb-12 bg-gradient-to-b from-neutral-100 dark:from-neutral-900" />
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
          className="border dark:border-neutral-800 py-2 w-full pl-9 pr-4 rounded-xl bg-transparent transition focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <Icon
          size={18}
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none"
        />
      </div>
    </section>
  )
}
