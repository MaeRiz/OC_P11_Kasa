//import { useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../datas/logements.json";
import img_banner from "../assets/imgs/home_banner.jpg";
import { useEffect } from "react";

const Home = () => {
  const banner = {
    src: img_banner,
    name: "Home Banner",
    text: "Chez vous, partout et ailleurs",
  };

  useEffect(() => {
    document.title = "Kasa - Home";
  }, []);

  return (
    <div className="home-page">
      <Banner img={banner} />
      <div className="cards-container">
        {data.map((lodge) => (
          <Card key={lodge.id} lodge={lodge} />
        ))}
      </div>
    </div>
  );
};

export default Home;
