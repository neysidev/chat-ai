import clsx from "clsx"

export default function Header() {
  return (
    <header className="space-y-2 sm:space-y-1">
      <h1
        className={clsx(
          "text-2xl leading-7 transition-all sm:leading-10 sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l",
          "from-purple-700 via-pink-600 to-black",
          "dark:from-purple-900 dark:via-purple-700 dark:to-purple-300",
        )}
      >
        Hi there, Mety
        <br />
        What would like to know?
      </h1>
      <p className="text-sm transition-all text-neutral-500 dark:text-neutral-300 sm:text-base duration-200">
        Use one of the most common prompts
        <br />
        below or use your own to begin.
      </p>
    </header>
  )
}
