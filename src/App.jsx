import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import About from "./Components/About"
import Services from "./Components/Services"
import Work from "./Components/Work"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"


function App() {
  return (
    <>
    <Navbar />
    <div id="header">
      <Header />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="work">
      <Work />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </>
  )
}

export default App;
