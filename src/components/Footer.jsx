import img_logo from "../assets/imgs/LOGO_white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={img_logo} alt="LOGO KASA" />
      <p>© 2020 Kasa. All right reserved</p>
    </footer>
  );
};

export default Footer;
