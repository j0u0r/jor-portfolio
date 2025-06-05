import "./Header.css";

function Header() {
  return (
    <header className="p-4 bg-darkgrey sticky top-0 z-50">
      <h1 className="text-2xl font-serif">Jordan Lee</h1>
      <div className="links font-mono">
        <a href="">About Me</a>
        <a href="">Education</a>
        <a href="">Work Experiences</a>
        <a href="">Awards</a>
        <a href="">Projects</a>
        <a href="">Contact Me</a>
      </div>
    </header>
  );
}
export default Header;
