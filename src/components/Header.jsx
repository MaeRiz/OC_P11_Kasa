import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import img_logo from "../assets/imgs/LOGO_red.svg";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={img_logo} alt="Logo Kasa" />
      </NavLink>
      <Navigation />
    </header>
  );
};

export default Header;
