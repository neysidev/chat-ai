import Chat from "./_components/Chat"
import Header from "./_components/Header"
import Prompts from "./_components/Prompts"
import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <div className="flex h-screen divide-x divide-neutral-200">
      <Sidebar />

      <main className="flex-1 grid place-items-center">
        <section className="max-w-3xl min-w-3xl mx-auto">
          <Header />
          <Prompts />
          <Chat />
        </section>
      </main>
    </div>
  )
}
