

import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Routes from "./components/Routes"
import Chooseus from "./components/Chooseus"
import MobileAppBanner from "./components/MobileAppBanner"
import Contact from "./components/Contact"
import { WhatsAppCTA } from "./components/Contact"
import Footer from "./components/Footer"


function App() {
 

  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <Routes/>
        <Chooseus/>
        <WhatsAppCTA/>
        <Contact/>
      
        <MobileAppBanner/>
        <Footer/>
      </div>
       
    </>
  )
}

export default App
