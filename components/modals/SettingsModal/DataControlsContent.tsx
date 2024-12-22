export default function DataControlsContent() {
  return (
    <ul className="divide-y">
      <li className="py-3 pt-0 flex items-center justify-between">
        <span>Shared links</span>
        <button className="border px-3 py-1.5 rounded-full transition hover:bg-neutral-100">
          Manage
        </button>
      </li>
      <li className="py-3 flex items-center justify-between">
        <span>Export data</span>
        <button className="border px-3 py-1.5 rounded-full transition hover:bg-neutral-100">
          Export
        </button>
      </li>
      <li className="py-3 flex items-center justify-between">
        <span>Delete account</span>
        <button className="border border-red-600 font-medium bg-red-600 text-white px-3 py-1.5 rounded-full transition">
          Delete
        </button>
      </li>
    </ul>
  )
}
