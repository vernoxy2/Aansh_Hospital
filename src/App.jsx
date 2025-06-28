import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services';
import Facilities from './pages/Facilities/Facilities';
import Achievement from './pages/Achievement/Achievement';
import Career from './pages/Career/Career';
import Contact from './pages/Contact/Contact';
import Faq from './pages/FAQ/Faq';

const App = () => {
  return (
    <Router>
       <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/about' element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/achievement" element={<Achievement />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
          </Routes>
       <Footer/>
    </Router>
  )
}

export default App
