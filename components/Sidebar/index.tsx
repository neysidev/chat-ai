import Image from "next/image"
import Link from "next/link"

import Tooltip from "../common/Tooltip"
import ActionsButtons from "./ActionsButtons"
import NewChat from "./NewChat"
import SettingsButton from "./SettingsButton"

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
        <SettingsButton />
        <hr className="w-full mt-2 pb-4 border-dashed border-neutral-200" />
        <Tooltip place="right" content="Profile" id="profile">
          <Link href="/profile">
            <Image
              src="/profile.jpg"
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
