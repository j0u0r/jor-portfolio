import { useTypewriter } from "react-simple-typewriter";

function Typewriter() {
  const WithLineBreaks = () => {
    const [Typewriter] = useTypewriter({
      words: ["Hi there!\n\nI am\nJordan Lee :)\n\nI'm a Cybersec\nstudent."],
      loop: 1,
      typeSpeed: 40,
      deleteSpeed: 0,
      delaySpeed: 1000,
    });

    return (
      <div className="text-8xl font-serif whitespace-pre-line">{Typewriter}</div>
    );
  };

  return WithLineBreaks
}

export default Typewriter();
