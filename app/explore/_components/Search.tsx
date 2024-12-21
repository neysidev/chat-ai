import Icon from "@/components/common/Icon"
import { useExploreStore } from "@/stores/exploreStore"

export default function Search() {
  const { search, setSearch } = useExploreStore()

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search GPTs"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border py-2 w-full pl-9 pr-4 rounded-xl bg-transparent"
      />
      <Icon
        size={18}
        name="search"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none"
      />
    </div>
  )
}
