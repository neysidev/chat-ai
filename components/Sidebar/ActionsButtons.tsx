import Icon from "../common/Icon"
import PageLink from "./PageLink"

export default function ActionsButtons() {
  return (
    <div className="flex flex-col space-y-1 border-b border-dashed pb-4 border-neutral-200">
      <PageLink href="/" icon={<Icon name="home" />} />
      <PageLink href="/search" icon={<Icon name="search" />} />
      <PageLink href="/explore" icon={<Icon name="explore" />} />
      <PageLink
        href="/history"
        icon={
          <Icon name="history" size={23} stroke="none" fill="currentColor" />
        }
      />
    </div>
  )
}
