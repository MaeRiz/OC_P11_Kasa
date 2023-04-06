import Banner from "../components/Banner";

const Home = () => {
  const img_banner = {
    src: "./assets/imgs/home_banner.jpg",
    name: "Home Banner",
    text: "Chez vous, partout et ailleurs",
  };

  return (
    <div className="home-page">
      <Banner img={img_banner} />
    </div>
  );
};

export default Home;
