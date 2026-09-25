import { FC, PropsWithChildren } from "react"

const Kbd: FC<PropsWithChildren> = ({ children }) => (
  <kbd className="bg-neutral-700 rounded-lg border border-neutral-600 py-0.5 px-1.5">
    {children}
  </kbd>
)

export default Kbd
