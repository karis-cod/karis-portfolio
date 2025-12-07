import './App.css'
import {Route, Routes } from 'react-router-dom'
import Navbar from './conponents/Navbar'
import HeaderPage from './Pages/Home'
import AboutPage from './Pages/About'
import SkillsPage from './Pages/Skills'
import ProjectPage from './Pages/Project';

function App() {
 return(<>
      <Navbar />
      <Routes>
        <Route path='/' element={<HeaderPage />}  />
        <Route path='/about' element={<AboutPage />}  />
        <Route path='/skill' element={<SkillsPage />}  />
        <Route path='/project' element={<ProjectPage />} />
      </Routes>
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
