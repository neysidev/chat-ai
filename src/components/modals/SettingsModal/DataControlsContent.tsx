export default function DataControlsContent() {
  return (
    <ul className="divide-y dark:divide-neutral-700">
      <li className="py-3 pt-0 flex items-center justify-between">
        <span>Shared links</span>
        <button className="border px-3 py-1.5 rounded-full transition hover:bg-neutral-100 dark:hover:bg-neutral-700">
          Manage
        </button>
      </li>
      <li className="py-3 flex items-center justify-between">
        <span>Export data</span>
        <button className="border px-3 py-1.5 rounded-full transition hover:bg-neutral-100 dark:hover:bg-neutral-700">
          Export
        </button>
      </li>
      <li className="py-3 flex items-center justify-between">
        <span>Delete account</span>
        <button className="border border-red-600 font-medium bg-red-600 text-white px-3 py-1.5 rounded-full transition hover:bg-red-50 dark:hover:bg-red-950/50 dark:bg-transparent dark:border-red-400 dark:text-red-400 dark:hover:text-red-500">
          Delete
        </button>
      </li>
    </ul>
  )
}
