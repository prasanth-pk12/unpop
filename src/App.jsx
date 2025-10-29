import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Brands from './components/Brands'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Brands />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App