import Categories from "./_components/Categories"
import Header from "./_components/Header"
import Search from "./_components/Search"

export default function Explore() {
  return (
    <div className="py-16">
      <Header />
      <Search />
      <Categories />
    </div>
  )
}
