import Image from "next/image"
import NewChat from "./NewChat"
import PageLink from "./PageLink"
import ActionsButtons from "./ActionsButtons"
import Link from "next/link"
import Icon from "../common/Icon"
import Tooltip from "../common/Tooltip"

export default function Sidebar() {
  return (
    <aside className="p-4 hidden sm:flex flex-col justify-between items-center">
      <div className="flex flex-col items-center space-y-5">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-xl"
        />
        <NewChat />
        <ActionsButtons />
      </div>
      <div className="flex flex-col items-center">
        <PageLink
          label="Settings"
          value="settings"
          href="/settings"
          icon={<Icon name="settings" />}
        />
        <hr className="w-full mt-2 pb-4 border-dashed border-neutral-200" />
        <Tooltip place="right" content="Profile" id="profile">
          <Link href="/profile">
            <Image
              src="/profile.png"
              alt="Profile"
              width={28}
              height={28}
              className="rounded-full"
            />
          </Link>
        </Tooltip>
      </div>
    </aside>
  )
}
