import Link from "next/link"
import Tooltip from "../common/Tooltip"
import Kbd from "../common/Kbd"

interface PageLinkProps {
  href?: string
  modalContent?: React.ReactElement
  onOpen?: () => void
  shortcut: string

  label: string
  value: string
  icon: React.ReactElement
}

const className =
  "inline-flex items-center text-neutral-600 justify-center p-1.5"

export default function PageLink({
  href,
  label,
  value,
  icon,
  onOpen,
  shortcut,
  modalContent,
}: PageLinkProps) {
  return (
    <Tooltip
      id={`${value}-tooltip`}
      content={
        <div className="flex space-x-1 items-center">
          <span className="font-medium">{label}</span>{" "}
          <span className="text-xs">
            <Kbd>shift</Kbd>+<Kbd>{shortcut}</Kbd>
          </span>
        </div>
      }
      place="right"
    >
      {href ? (
        <Link href={href} className={className}>
          {icon}
        </Link>
      ) : (
        <>
          <button onClick={onOpen} className={className}>
            {icon}
          </button>
          {modalContent}
        </>
      )}
    </Tooltip>
  )
}
