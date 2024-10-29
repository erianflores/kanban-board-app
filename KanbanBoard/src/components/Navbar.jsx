import logoImage from "../assets/logo-taskcanvas.png";

export default function Navbar() {
  return (
    <div id="navbar-container">
      <img id="website-logo" src={logoImage} alt="Logo Image" />
      <h1 id="website-name">TaskCanvas</h1>
    </div>
  );
}
