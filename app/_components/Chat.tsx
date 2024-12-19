export default function Chat() {
  return (
    <section className="mt-16 space-y-2 bg-white shadow-sm rounded-xl border p-4 border-neutral-150">
      <textarea
        className="bg-transparent text-sm w-full h-full min-h-28 resize-none placeholder:text-black focus:outline-none"
        placeholder="Ask whatever you want..."
      />
      <footer className="flex text-sm justify-between">
        <div className="space-x-5 flex">
          <button className="flex space-x-1 font-medium text-neutral-600 transition-colors select-none hover:text-neutral-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span>Add Attachment</span>
          </button>

          <button className="flex space-x-1 font-medium text-neutral-600 transition-colors select-none hover:text-neutral-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <span>Use Image</span>
          </button>
        </div>
        <div className="space-x-2 flex items-center">
          <span className="ml-auto text-neutral-500 font-medium">0/1000</span>

          <button className="rounded-xl p-1.5 text-white bg-gradient-to-t from-purple-900 to-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </button>
        </div>
      </footer>
    </section>
  )
}
