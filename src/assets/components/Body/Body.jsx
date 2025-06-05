import "./Body.css";
import { Typewriter } from "react-simple-typewriter";


function Body({opacity}) {



  return (
    <div style={{opacity: opacity, transition: "all 500ms ease-in-out"}}>
      <div className="bg-grey" id="aboutMe">
        <div className="page flex items-center justify-center">
          <span style={{fontWeight: 'bold', fontSize: "48px" }}>
          <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
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
    </div>
  );
}

export default Body;
