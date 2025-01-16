import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react
router-dom'; 
import Home from './Lab9/Home/Home'; 
import About from './Lab9/About/About'; 
import Contact from './Lab9/Contact/Contact'; 
import Navbar from './Lab9/Navbar'; 
import Footer from './Lab9/Footer'; 
import Header from './Lab9/Header'; 
 
function App() { 
  return ( 
    <div className="App container"> 
      <Router> 
        <div> 
          <Header/> 
          <Navbar/> 
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} /> 
          </Routes> 
          <br></br><br></br><br></br> 
          <Footer /> 
        </div> 
      </Router> 
    </div> 
  ); 
} 
 
export default App;