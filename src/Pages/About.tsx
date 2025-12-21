import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function AboutPage() {
    useEffect(() => {
    AOS.init({
      duration: 800,   // animation speed (ms)
      once: true,      // animation happens only once
    });
  }, []);

  return(<div className="about-con">
    <h2  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">About <span>Me</span></h2>
    <div className="grid-con">
      <div data-aos="fade-down-right" className='grid-1'>
      <h3>Passonate Web Developer and Tech Creator</h3>
      <p className='grid-1-p' >With over 6 months of experience in web development, I specialize in creating responsive, accesible and performantweb applications using morden technologies.</p>
      <p className='grid-1-p2'>I'm passionate about creating elegant solutions to complex problems, and i'm constantly learning new technologies and techniques to stay at the forefront of the evr-elvolving web landscape.</p>
      <button className="about-btn"><a className="aa-b" href="#contact">Get in Touch</a></button>
      <button className="about-btn"><a className="aa-b" href="resume.docx" download rel="noopener noreferrer" target="blank">Download resume</a></button>
    </div>
    <div className='grid-2'>
      <div data-aos="fade-down-left" className='grid-2-con'>
        <h4>FRONTEND ENGINEER</h4>
        <p className='grid-2-p'>
          fixing user-focused interfaces and applications with modern techniques and technologies
        </p>
      </div>
      <div data-aos="fade-down-left" className='grid-2-con2'>
        <h4>WEB DEVELOPMENT</h4>
        <p className='grid-2-p2'>Creating responsive websites and wed applications with modern frameworks</p>
      </div>
    </div>
    </div>
  </div>)
}
export default AboutPage