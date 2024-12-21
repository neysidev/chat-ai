import Icon from "./Icon"

export default function MenuButton() {
  return (
    <button className="sm:hidden transition hover:text-neutral-600">
      <Icon name="menu" stroke="black" />
    </button>
  )
}
