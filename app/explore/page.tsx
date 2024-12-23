import Groups from "./_components/Groups"
import Header from "./_components/Header"
import Search from "./_components/Search"

export default function Explore() {
  return (
    <div className="py-16">
      <Header />
      <Search />
      <Groups />
    </div>
  )
}
