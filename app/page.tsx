import Sidebar from "@/components/Sidebar"
import Chat from "./_components/Chat"
import Header from "./_components/Header"
import Prompts from "./_components/Prompts"

export default function Home() {
  return (
    <div className="flex h-screen divide-x divide-neutral-200">
      <Sidebar />

      <main className="flex-1 p-4 md:py-16 sm:grid sm:place-items-center">
        <section className="max-w-3xl min-w-3xl mx-auto flex flex-col h-full items-start justify-between sm:h-auto">
          <button className="sm:hidden transition hover:text-neutral-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <line x1="4" y1="9" x2="20" y2="9" />
              <line x1="4" y1="15" x2="14" y2="15" />
            </svg>
          </button>

          <div className="w-full flex-1 flex flex-col justify-center">
            <Header />
            <Prompts />
          </div>
          <div className="w-full">
            <Chat />
          </div>
        </section>
      </main>
    </div>
  )
}
