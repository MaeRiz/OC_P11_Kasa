import React, { useEffect } from "react";
import Banner from "../components/Banner";
import img_banner from "../assets/imgs/about_banner.jpg";

const About = () => {
  const banner = {
    src: img_banner,
    name: "About Banner",
    text: "",
  };

  useEffect(() => {
    document.title = "Kasa - A Propos";
  }, []);

  return (
    <div>
      <Banner img={banner} />
    </div>
  );
};

export default About;
