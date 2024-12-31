import imgLogo from "../../assets/ITF_Logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={imgLogo} alt="ITF Logo" />
      <h1>Grand Slam Tournaments</h1>
      <p>They are the most prestigious individual competitions in tennis !</p>
    </header>
  );
}

export default Header;
