import './Navbar.css'
import { Menu, X } from 'lucide-react'
import{ useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Navbar() {
   useEffect(() => {
    AOS.init({
      duration: 800,   // animation speed (ms)
      once: true,      // animation happens only once
    });
  }, []);

  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(!open);
  }

  return (<section data-aos="zoom-out" className='nav'>
    <div className="nav-con">
      <p className='nav-p'><span>KarisTech</span> Portfolio</p>

       <button className='toggle'  onClick={()=> setOpen(!open)}>
         {open ? <X size={30} /> : <Menu size={30} /> }
       </button>

      <div className='link'>
        <a className='li' href="#home">Home</a>
        <a className='li' href="#about">About</a>
        <a className='li' href="#skill">Skill</a>
        <a className='li' href="#project">Projects</a>
        <a className='li' href="#contact">Contact</a>
      </div>
      {open && (
        <div className='link-2'>
        <a className='li' onClick={handleToggle} href="#home">Home</a>
        <a className='li' onClick={handleToggle} href="#about">About</a>
        <a className='li' onClick={handleToggle} href="#skill">Skill</a>
        <a className='li' onClick={handleToggle} href="#project">Projects</a>
        <a className='li' onClick={handleToggle} href="#contact">Contact</a>
      </div>
      )}
    </div>
  </section>
  )
}

export default Navbar