import Typewriter from "./assets/typewriter";

function App() {
  return (
    <>
      <header className="p-4 bg-darkgrey sticky top-0 z-50">
        <h1 className="text-2xl font-serif">Jordan Lee.</h1>
        <div className="links font-mono">
          <a href="#aboutMe">About Me</a>
          <a href="#education">Education</a>
          <a href="#work">Work Experiences</a>
          <a href="#awards">Awards</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </header>

      <div id="aboutMe">
        <div id="aboutmepic">
        <img src="/public/AboutMe.jpg" alt="AboutMePic" style={{float:"left"}} id="AboutMePic"/>
        </div>
        <div className="page flex items-left justify-left">
          <Typewriter/>
        </div>
        <div className="page">
          <h1>About me</h1>
        </div>
        <div className="page" id="education">
          <h1>About me2</h1>
        </div>
        <div className="page" id="work">
          <h1>About me3</h1>
        </div>
        <div className="page" id="awards">
          <h1>About me4</h1>
        </div>
        <div className="page" id="projects">
          <h1>About me5</h1>
        </div>
        <div className="page" id="contact">
          <h1>About me6</h1>
        </div>
      </div>

      <footer className="bg-darkgrey">
        <div className="ending">
          &lt;Hello there! Thank you for making it this far :) here is a cookie
          🍪&gt;
        </div>
      </footer>
    </>
  );
}

export default App;
