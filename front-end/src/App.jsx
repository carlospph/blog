import Explication from "./components/Explication/Explication"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Populars from "./components/Populars/Populars"

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Explication />
      <Populars />
    </div>
  )
}

export default App
