import Link from "next/link"

interface PageLinkProps {
  href: string
  icon: React.ReactElement
}

export default function PageLink({ href, icon }: PageLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-neutral-600 justify-center p-1.5"
    >
      {icon}
    </Link>
  )
}
