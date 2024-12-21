import Link from "next/link"
import Tooltip from "../common/Tooltip"

interface PageLinkProps {
  href: string
  label: string
  value: string
  icon: React.ReactElement
}

export default function PageLink({ href, label, value, icon }: PageLinkProps) {
  return (
    <Tooltip id={`${value}-tooltip`} content={label} place="right">
      <Link
        href={href}
        className="inline-flex items-center text-neutral-600 justify-center p-1.5"
      >
        {icon}
      </Link>
    </Tooltip>
  )
}
