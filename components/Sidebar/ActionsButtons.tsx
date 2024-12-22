import Icon from "../common/Icon"
import PageLink from "./PageLink"
import SearchButton from "./SearchButton"

export default function ActionsButtons() {
  return (
    <div className="flex flex-col space-y-1 border-b border-dashed pb-4 border-neutral-200">
      <PageLink
        href="/"
        icon={<Icon name="home" />}
        label="Home"
        value="home"
      />
      <SearchButton />
      <PageLink
        href="/explore"
        icon={<Icon name="explore" />}
        label="Explore"
        value="explore"
      />
      <PageLink
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
