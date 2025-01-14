import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"



function App() {

  return (
    <>
      <div className="md:p-4 p-4"> 
        <Navbar />
      </div>
      <Hero />
      <div className="md:p-4 p-4"> 
        <Features />
      </div>
    </>
  )
}

export default App
