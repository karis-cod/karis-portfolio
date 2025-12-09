import { Facebook, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";



function ContactPage() {
  return(<div>
    <h2><span>Get</span> In Touch</h2>
    <p>Having a project in mind or want to collaborate? Feel free to react out. I'm always open to discussing new opportunities.</p>
    <div>
      <div>
        <h4>Contact Information</h4>
        <div>
          <h5>Email</h5>
          <p>chukwuebukaogu3@gmail.com</p>
        </div>
        <div>
          <h5>Phone</h5>
          <p>+234 814 070 4167</p>
        </div>
        <div>
          <h5>Location</h5>
          <p>9 Kanjowo Street, Ajegunle, Apapa, Lagos.</p>
        </div>
        <div>
          <p>Connect with me</p>
          <ul>
            <li><a href=""> <Facebook size={26} /></a></li>
            <li><a href=""> <Twitter size={26} /></a></li>
            <li><a href=""> <Linkedin  size={26} /></a></li>
            <li><a href=""> <FaWhatsapp size={26} /></a></li>
          </ul>
        </div>
      </div>
      <div>
        <h4>Send a message</h4>
        <form>
          <label htmlFor="name">Your Name
            <input id="name" type="text" placeholder="name" />
          </label>
          <label htmlFor="email">Your Email 
            <input type="email" id="email" placeholder="email"/>
          </label>
          <label htmlFor="textarea">Your Message
            <textarea id="textarea" placeholder="Hello, I'd like to talk about...."></textarea>
          </label>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  </div>)
}

export default ContactPage