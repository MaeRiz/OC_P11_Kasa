import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src="./assets/imgs/LOGO_red.svg" alt="Logo Kasa" />
      </NavLink>
      <Navigation />
    </header>
  );
};

export default Header;
