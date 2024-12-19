import Sidebar from "@/components/Sidebar"
import Chat from "./_components/Chat"
import Header from "./_components/Header"
import Prompts from "./_components/Prompts"
import Icon from "@/components/common/Icon"

export default function Home() {
  return (
    <div className="flex h-screen divide-x divide-neutral-200">
      <Sidebar />

      <main className="flex-1 p-4 md:py-16 sm:grid sm:place-items-center">
        <section className="max-w-3xl min-w-3xl mx-auto flex flex-col h-full items-start justify-between sm:h-auto">
          <button className="sm:hidden transition hover:text-neutral-600">
            <Icon name="menu" stroke="black" />
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
