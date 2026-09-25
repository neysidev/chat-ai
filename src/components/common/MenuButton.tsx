import Icon from "./Icon"

export default function MenuButton() {
  return (
    <div className="sticky top-0 p-4 pb-2 z-10 bg-neutral-100 dark:bg-neutral-900 sm:hidden transition-colors duration-200">
      <button className="text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 focus:outline-none transition-colors duration-200 hover:text-neutral-600 dark:hover:text-neutral-400">
        <Icon name="menu" />
      </button>
    </div>
  )
}
