import "./Body.css";
import { Typewriter } from "react-simple-typewriter";


function Body() {

  return (
    <>
      <div className="bg-grey">
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
        <div className="page">
          <h1>About me2</h1>
        </div>
        <div className="page">
          <h1>About me3</h1>
        </div>
        <div className="page">
          <h1>About me4</h1>
        </div>
        <div className="page">
          <h1>About me5</h1>
        </div>
        <div className="page">
          <h1>About me6</h1>
        </div>
      </div>
    </>
  );
}

export default Body;
