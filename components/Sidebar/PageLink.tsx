import Link from "next/link"
import Tooltip from "../common/Tooltip"

interface PageLinkProps {
  href?: string
  modalContent?: React.ReactElement
  onOpen?: () => void

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
  modalContent,
}: PageLinkProps) {
  return (
    <Tooltip id={`${value}-tooltip`} content={label} place="right">
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
