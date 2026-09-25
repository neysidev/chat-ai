"use client"

import { ReactNode } from "react"
import { PlacesType, Tooltip as ReactTooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

interface TooltipProps {
  id: string
  content: ReactNode
  children: ReactNode
  place: PlacesType
}

const Tooltip: React.FC<TooltipProps> = ({ id, content, place, children }) => {
  return (
    <div>
      <div data-tooltip-id={id} className="inline-block group">
        {children}
      </div>

      <ReactTooltip
        id={id}
        place={place}
        className="!rounded-xl !text-sm !font-medium"
      >
        {content}
      </ReactTooltip>
    </div>
  )
}

export default Tooltip
