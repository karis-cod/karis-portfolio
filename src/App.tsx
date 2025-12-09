import './App.css'
//import {Route, Routes } from 'react-router-dom'
import Navbar from './conponents/Navbar'
import HeaderPage from './Pages/Home'
import AboutPage from './Pages/About'
import SkillsPage from './Pages/Skills'
import ProjectPage from './Pages/Project'
import ContactPage from './Pages/Contact'

function App() {
 return(<>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<HeaderPage />}  />
        <Route path='/about' element={<AboutPage />}  />
        <Route path='/skill' element={<SkillsPage />}  />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes> */}
      <div id='home'>
        <HeaderPage />
      </div>
      <div id='about'>
        <AboutPage />
      </div>
      <div id='skill'>
        <SkillsPage />
      </div>
      <div id='project'>
        <ProjectPage />
      </div>
      <div id='contact'>
        <ContactPage />
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        id="bg-video"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
 </>)
}

export default App
