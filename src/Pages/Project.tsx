import { Github, ExternalLink, ArrowRight } from "lucide-react";

function ProjectPage() {

  interface project {
    image: string;
    tool: string;
    tool2: string;
    tool3: string;
    name: string;
    text: string;
    link: string;
  }

  function projectFunc({ image, tool, tool2, tool3, name, text, link }: project) {
    return (<div className='project-con'>
      <img className="project-img" src={image} alt="project image" />
      <div className='project-dis' >
        <button className="project-btn">{tool}</button>
        <button className="project-btn">{tool2}</button>
        <button className="project-btn">{tool3}</button>
        <h4>{name}</h4>
        
        <p className="project-dis-p">{text}</p>

        <p className="port-link-icon"><a href="https://github.com/karis-cod/"><Github size={30} color="white" /> </a> <a href={link}><ExternalLink size={30} color="white" /></a></p>
      </div>
    </div>)
  }
  return (<>

    <h2>Featured <span>project</span></h2>

    <p className="pro-dis-p">Here are some of my resent prijects, A collection of the problems I’ve solved and the ideas I’ve turned into real experiences,    Every project here tells a story—of challenges faced, solutions crafted, and growth achieved.
    </p>

    <div className='pro-con'>
      {projectFunc({ image: '/images/litcoin.png', tool: 'HTML', tool2: 'CSS', tool3: 'Javascript', name: 'litcoin ', text: ' A simple litcoin clone app using css and javascript. ',link:'https://karis-cod.github.io/kariscode-bitspire/' })}

      {projectFunc({ image: '/images/bitspire.png', tool: 'react', tool2: 'typescript', tool3: 'css', name: 'bitspire academy', text: 'A beautiful tech academy website displaying the function of ',link: 'https://karis-cod.github.io/karis-web/' })}

      {projectFunc({ image: '/images/plumber.png', tool: 'react', tool2: 'typescript', tool3: 'css', name: 'portfolio', text: 'A beautiful plumber websit showcasing the works of a plumber.',link: 'https://karis-cod.github.io/kariscod-website/' })}
      
    </div>
    <button className="pro-btn">Check my github<ArrowRight size={20} color="rgb(68, 68, 248)" /></button>
  </>)
}

export default ProjectPage