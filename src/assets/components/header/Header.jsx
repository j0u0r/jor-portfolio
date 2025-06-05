import "./Header.css";

function Header({setOpacity}) {
  return (
    <header className="p-4 bg-darkgrey sticky top-0 z-50">
      <h1 className="text-2xl font-serif">Jordan Lee</h1>
      <div className="links font-mono">
        <a onClick={() => setOpacity(0)} href="#aboutMe">About Me</a>
        <a onClick={() => setOpacity(0)} href="#education">Education</a>
        <a onClick={() => setOpacity(0)} href="#work">Work Experiences</a>
        <a onClick={() => setOpacity(0)} href="#awards">Awards</a>
        <a onClick={() => setOpacity(0)} href="#projects">Projects</a>
        <a onClick={() => setOpacity(0)} href="#contact">Contact Me</a>
      </div>
    </header>
  );
}
export default Header;
