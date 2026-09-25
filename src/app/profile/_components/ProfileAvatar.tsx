import Image from "next/image"
import clsx from "clsx"

interface ProfileAvatarProps {
  name: string
  /** Data URL or path; falls back to /profile.jpg then initials */
  src?: string
  size?: "sm" | "lg"
}

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0]?.toUpperCase() ?? "")
    .join("")
}

export default function ProfileAvatar({
  name,
  src,
  size = "lg",
}: ProfileAvatarProps) {
  const initials = getInitials(name) || "?"
  const imgSrc = src || "/profile.jpg"

  const dimensionClasses = {
    sm: "w-8 h-8 text-xs",
    lg: "w-20 h-20 text-2xl",
  }

  return (
    <div
      className={clsx(
        "relative rounded-full overflow-hidden flex items-center justify-center flex-shrink-0",
        "bg-gradient-to-br from-purple-700 to-pink-600",
        "dark:from-purple-700 dark:to-purple-400",
        dimensionClasses[size]
      )}
      aria-label={`Avatar for ${name}`}
    >
      {/* Initials layer — always rendered, visible when image fails to load */}
      <span
        className={clsx(
          "absolute inset-0 flex items-center justify-center font-semibold text-white select-none",
          dimensionClasses[size]
        )}
        aria-hidden="true"
      >
        {initials}
      </span>

      {/* Image layer — sits above initials; hides itself on error */}
      <Image
        key={imgSrc}
        src={imgSrc}
        alt={name}
        fill
        className="object-cover"
        onError={e => {
          ;(e.currentTarget as HTMLImageElement).style.display = "none"
        }}
        unoptimized={imgSrc.startsWith("data:")}
      />
    </div>
  )
}
