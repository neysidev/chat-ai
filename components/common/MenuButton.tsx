import Icon from "./Icon"

export default function MenuButton() {
  return (
    <div className="sticky top-0 p-4 pb-2 z-10 bg-neutral-100 sm:hidden">
      <button className="bg-neutral-100 focus:outline-none transition hover:text-neutral-600">
        <Icon name="menu" stroke="black" />
      </button>
    </div>
  )
}
