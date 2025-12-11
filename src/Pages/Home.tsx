import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function HeaderPage() {
    useEffect(() => {
    AOS.init({
      duration: 800,   // animation speed (ms)
      once: true,      // animation happens only once
    });
  }, []);
  return(<div className='home-con'>
      <h1 data-aos="fade-down-right" >Hi, I'm Ogu <span>Karis</span></h1>
      <p data-aos="fade-left" className='home-p'>I build exceptional digital experiences that are fast, responsive, accessible, visually appealing and user-focused interfaces. Let's create something amazing together.
      </p>
      <button data-aos="fade-up"><a href="#project" className="h-b">view my work</a></button>
  </div>)
}

export default HeaderPage