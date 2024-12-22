import { useRouter } from "next/navigation"
import { useHotkeys } from "react-hotkeys-hook"

import Icon from "../common/Icon"
import PageLink from "./PageLink"
import SearchButton from "./SearchButton"

export default function ActionsButtons() {
  const router = useRouter()

  useHotkeys("shift+n", () => router.push("/"))
  useHotkeys("shift+e", () => router.push("/explore"))
  useHotkeys("shift+h", () => router.push("/history"))

  return (
    <div className="flex flex-col space-y-1 border-b border-dashed pb-4 border-neutral-200">
      <PageLink
        href="/"
        shortcut="N"
        icon={<Icon name="home" />}
        label="Home"
        value="home"
      />
      <SearchButton />
      <PageLink
        shortcut="E"
        href="/explore"
        icon={<Icon name="explore" />}
        label="Explore"
        value="explore"
      />
      <PageLink
        shortcut="H"
        href="/history"
        label="History"
        value="history"
        icon={
          <Icon name="history" size={23} stroke="none" fill="currentColor" />
        }
      />
    </div>
  )
}
