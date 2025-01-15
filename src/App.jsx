import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Download from "./components/Downlaod"
import Contact from "./components/Contact"



function App() {

  return (
    <>
      <div className="md:p-4 p-4"> 
        <Navbar />
      </div>
      <Hero />
      <div className="md:p-4 p-4"> 
        <Features />
        <Pricing />
        <Download />
      </div>
      <Contact />
      
    </>
  )
}

export default App
