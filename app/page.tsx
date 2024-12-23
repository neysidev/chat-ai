import Chat from "../components/Chat"
import Header from "./_components/Header"
import Prompts from "./_components/Prompts"

export default function Home() {
  return (
    <>
      <div className="w-full flex-1 mb-8 flex flex-col justify-center">
        <Header />
        <Prompts />
      </div>
      <div className="w-full">
        <Chat />
      </div>
    </>
  )
}
