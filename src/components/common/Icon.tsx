import { IconName, icons } from "./icons"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export default function Icon({
  name,
  size = 24,
  stroke = "currentColor",
  fill = "none",
  strokeWidth = 1.5,
  ...rest
}: IconProps) {
  const IconPath = icons[name]

  return (
    <svg
      aria-label={name}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      {...rest}
    >
      <IconPath />
    </svg>
  )
}
