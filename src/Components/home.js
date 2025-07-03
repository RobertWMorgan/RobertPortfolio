import { EnvelopeFill, Github, Linkedin} from "react-bootstrap-icons";
import '../App.css'


const skills = [
    { name: "React" },
    { name: "SASS"},
    { name: "Django"},
    { name: "Express"},
    { name: "MongoDB"},
    { name: "PostgreSQL"},
    { name: "AWS"},
    { name: "JavaScript"},
    { name: "CSS"},
    { name: "HTML5"},
  ];

const Home = () => {
    return (
      <div className="container py-5">
        <header className="mb-5">
          <h1 className="display-4">Robert Morgan</h1>
          <h2 className="h5 text-muted">Full Stack Developer</h2>
        </header>
  
        <section className="mb-5">
          <h3 className="h4 mb-3">About Me</h3>
          <p className="text-muted">
            I’m a London-based Junior Full-Stack Developer with a background in digital marketing. My journey into tech began with learning HTML and CSS, which quickly evolved into a deep passion for web development. This passion led me to complete the Software Engineering Immersive at General Assembly. Since then, I’ve worked in Front-End Development at Investcloud, honing my skills and deepening my love for building impactful digital experiences.
          </p>
        </section>
  
        <section className="mb-5">
          <h3 className="h4 mb-3">Skills</h3>
      <div className="d-flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill.name} className="badge" style={{ backgroundColor: '#a3c8f0', color: '#1a3d7c' }}>
          {skill.name}
        </span>
      ))}
    </div>
  </section>
  
        <section>
          <h3 className="h4 mb-3">Contact</h3>
          <div className="d-flex gap-3">
            <EnvelopeFill className= "social-button" size={20} onClick={() => {
        window.location = 'mailto:robert.morgan0703@gmail.com'
      }}/>
            <Github size={20} className= "social-button" onClick={() => window.open('https://github.com/RobertWMorgan')} />
            <Linkedin size={20} className= "social-button" onClick={() => window.open('https://www.linkedin.com/in/robertwmorgan-73/')} />
          </div>
        </section>
      </div>
    );
  }

  export default Home