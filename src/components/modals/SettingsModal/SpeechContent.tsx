import Icon from "@/components/common/Icon"

export default function SpeechContent() {
  return (
    <ul className="divide-y dark:divide-neutral-700">
      <li className="py-3 pt-0 space-x-8 flex items-center justify-between">
        <h4>Voice</h4>
        <div className="flex">
          <div className="border-r dark:border-neutral-700 pr-2 mr-2">
            <button className="px-3 py-1.5 flex items-center space-x-1 rounded-full transition hover:bg-neutral-100 dark:hover:bg-neutral-700">
              <Icon name="play" size={14} />
              <span>Play</span>
            </button>
          </div>
          <button className="px-3 flex py-1.5 items-center space-x-1 rounded-full transition hover:bg-neutral-100 dark:hover:bg-neutral-700">
            <span>Sol</span>
            <Icon name="chevronDown" size={14} />
          </button>
        </div>
      </li>
      <li className="py-3 space-y-2">
        <header className="flex items-center justify-between">
          <h4>Main Language</h4>
          <button className="px-3 flex py-1.5 items-center space-x-1 rounded-full transition hover:bg-neutral-100 dark:hover:bg-neutral-700">
            <span>Auto-Detect</span>
            <Icon name="chevronDown" size={14} />
          </button>
        </header>
        <p className="text-xs pr-4 text-neutral-600 dark:text-neutral-400">
          For best results, select the language you mainly speak. If it's not
          listed, it may still be supported via auto-detection.
        </p>
      </li>
    </ul>
  )
}
