import './Navbar.css'

function Navbar() {
  return (<div className="nav-con">
    <p className='nav-p'><span>KarisTech</span> Portfolio</p>
    <div className='link'>
     <a className='li' href="#home">Home</a>
      <a className='li' href="#about">About</a>
      <a className='li' href="#skill">Skill</a>
      <a className='li' href="#project">Projects</a>
      <a className='li' href="#contact">Contact</a>
    </div>
  </div>)
}

export default Navbar