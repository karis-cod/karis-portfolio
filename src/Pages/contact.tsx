import { Facebook, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

  


function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,   // animation speed (ms)
      once: true,      // animation happens only once
    });
  }, []);

  return (<div className="contact-page">
    <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><span>Get</span> In Touch</h2>
    <p data-aos="zoom-in-up" className="contact-header-p">Having a project in mind or want to collaborate? Feel free to react out. I'm always open to discussing new opportunities.</p>
    <div className="contact-grid">
      <div data-aos="fade-up"
     data-aos-anchor-placement="center" className="grid-2-contact">
        <h4>Send a message</h4>
        <form>
          <label htmlFor="name"> <span className="spa">Your Name</span>
            <input id="name" type="text" placeholder="name" />
          </label>
          <label htmlFor="email"><span className="spa">Your Email</span>
            <input type="email" id="email" placeholder="email" />
          </label>
          <label htmlFor="textarea"><span className="spav">Your Message</span>
            <textarea id="textarea" rows={6} cols={10} placeholder="Hello, I'd like to talk about...."></textarea>
          </label>
          <button>Send Message</button>
        </form>
      </div>
      <div className="grid-1-contact">
        <h4 data-aos="flip-down">Contact Information</h4>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="info-con">
          <h5 className="ll">Email</h5>
          <p>chukwuebukaogu3@gmail.com</p>
        </div>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1000"
     data-aos-duration="1000" className="info-con">
          <h5 className="ll">Phone</h5>
          <p>+234 814 070 4167</p>
        </div>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="2000"
     data-aos-duration="2000" className="info-con">
          <h5 className="ll">Location</h5>
          <p>9 Kanjowo Street, Ajegunle, Apapa, Lagos.</p>
        </div>
        <div className="contact-link-con">
          <h4 data-aos="zoom-in-left">Connect with me</h4>
          <ul>
            <li><a href=""> <Facebook size={26} /></a></li>
            <li><a href=""> <Twitter size={26} /></a></li>
            <li><a href=""> <Linkedin size={26} /></a></li>
            <li><a href=""> <FaWhatsapp size={26} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>)
}

export default ContactPage