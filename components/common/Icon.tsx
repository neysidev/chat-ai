import { IconName, icons } from "./icons"

interface IconProps {
  name: IconName
  size?: number
  fill?: string
  stroke?: string
  strokeWidth?: number
  className?: string
}

export default function Icon({
  name,
  size = 24,
  stroke = "currentColor",
  fill = "none",
  strokeWidth = 1.5,
  className,
}: IconProps) {
  const IconElement = icons[name]

  if (!icons[name]) {
    throw new Error(`Icon ${name} not found`)
  }

  return (
    <svg
      aria-label={name}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      <IconElement />
    </svg>
  )
}
