const Banner = ({ img }) => {
  return (
    <div className="banner">
      <img src={img.src} alt={img.name} />
      {img.text !== "" && <h3>{img.text}</h3>}
    </div>
  );
};

export default Banner;
