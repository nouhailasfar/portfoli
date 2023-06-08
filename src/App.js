import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import './App.css';
import React , {useState}  from 'react';
import Home from './compoment/Home';
import About from './compoment/About';
import Myproject from './compoment/Myproject';
import Contact from './compoment/Contact';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';

function App() {
  const [click,setClick] = useState(false);
  const handClick = () => setClick(!click)
  return (
  
    <div className="container">
    <BrowserRouter>
      <div className="header">
        <Link style={{textDecoration:"none",zIndex:4}} to="/">
             <h2 className="logo">nouhaila sfar</h2>
        </Link>
      <ul className={click ? "nav active" : "nav"}>
          <a><Link to={"/"}>Home</Link></a>
          <a><Link  to={"/compoment/about"}>About</Link></a>
          <a><Link  to={"/compoment/Myproject"}>Myproject</Link></a> 
          <a><Link to={"/compoment/contact"}>Contact</Link></a>

    
      </ul>
      <div className="humburger" onClick={handClick}>
        {
          click ? ( <FaTimes size={30} style={{color:"#fff"}} />) : (  <FaBars size={30} style={{color:"#fff"}} />)
        }
         
        
      </div>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/compoment/about" element={<About />} />
          <Route path="/compoment/Myproject" element={<Myproject />} />

          <Route path="/compoment/contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
      
</div>
);
}
export default App;
