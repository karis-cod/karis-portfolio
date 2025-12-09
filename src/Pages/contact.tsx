import { Facebook, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";



function ContactPage() {
  return (<div className="contact-page">
    <h2><span>Get</span> In Touch</h2>
    <p className="contact-header-p">Having a project in mind or want to collaborate? Feel free to react out. I'm always open to discussing new opportunities.</p>
    <div className="contact-grid">
      <div className="grid-2-contact">
        <h4>Send a message</h4>
        <form>
          <label htmlFor="name">Your Name
            <input id="name" type="text" placeholder="name" />
          </label>
          <label htmlFor="email">Your Email
            <input type="email" id="email" placeholder="email" />
          </label>
          <label htmlFor="textarea"><span className="spav">Your Message</span>
            <textarea id="textarea" rows={6} cols={10} placeholder="Hello, I'd like to talk about...."></textarea>
          </label>
          <button>Send Message</button>
        </form>
      </div>
      <div className="grid-1-contact">
        <h4>Contact Information</h4>
        <div className="info-con">
          <h5 className="ll">Email</h5>
          <p>chukwuebukaogu3@gmail.com</p>
        </div>
        <div className="info-con">
          <h5 className="ll">Phone</h5>
          <p>+234 814 070 4167</p>
        </div>
        <div className="info-con">
          <h5 className="ll">Location</h5>
          <p>9 Kanjowo Street, Ajegunle, Apapa, Lagos.</p>
        </div>
        <div className="contact-link-con">
          <h4>Connect with me</h4>
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