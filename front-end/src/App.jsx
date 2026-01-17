import Categorys from "./components/Categorys/Categorys"
import Explication from "./components/Explication/Explication"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Newsletter from "./components/Newsletter/Newsletter"
import Populars from "./components/Populars/Populars"
import Recents from "./components/Recents/Recents"

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Explication />
      <Populars />
      <Categorys />
      <Recents />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
