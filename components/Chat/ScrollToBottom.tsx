import clsx from "clsx"

interface ScrollToBottomProps {
  isVisible: boolean
  onClick: () => void
}

export default function ScrollToBottom({
  isVisible,
  onClick,
}: ScrollToBottomProps) {
  return (
    <div
      className={clsx(
        "absolute left-0 right-0 bottom-full transition-all ease-in duration-150 flex justify-center pb-5 pt-1 bg-gradient-to-t from-neutral-100",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <button
        onClick={onClick}
        className={clsx(
          "bg-black text-white p-1.5 transition-all ease-in-out duration-150 rounded-full",
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}
