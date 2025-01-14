import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"



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
      </div>
      
    </>
  )
}

export default App
