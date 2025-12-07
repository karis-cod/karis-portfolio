import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (<div className="nav-con">
    <p className='nav-p'><span>KarisTech</span> Portfolio</p>
    <div className='link'>
      <Link className='li' to='/'>Home</Link>
      <Link className='li' to='/about'>About</Link>
      <Link className='li' to='/skill'>Skills</Link>
      <Link className='li' to='/project'>Project</Link>
      <Link className='li' to='/contact'>Contact</Link>
    </div>
  </div>)
}

export default Navbar