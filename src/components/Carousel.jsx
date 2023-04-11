import { useEffect, useState } from "react";

const Carousel = ({ pictures, name }) => {
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    showSlide(sliderPosition);
  }, []);

  const prevSlideHandler = () => {
    let newPosition = sliderPosition;
    newPosition = newPosition - 1;
    if (newPosition === -1) {
      newPosition = pictures.length - 1;
    }
    showSlide(newPosition);
    setSliderPosition(newPosition);
  };

  const nextSlideHandler = () => {
    let newPosition = sliderPosition;
    newPosition = newPosition + 1;
    if (newPosition === pictures.length) {
      newPosition = 0;
    }
    showSlide(newPosition);
    setSliderPosition(newPosition);
  };

  const showSlide = (newPosition) => {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[newPosition].style.display = "block";
  };

  return (
    <div className="carousel-container">
      {pictures.map((item, index) => (
        <div key={name + index} className="slide">
          <img src={item} alt={`${name} ${index}`} />
          <div className="numberText">
            {index + 1}/{pictures.length}
          </div>
        </div>
      ))}
      <i
        className="control left fa-solid fa-chevron-left"
        onClick={prevSlideHandler}
      ></i>
      <i
        className="control right fa-solid fa-chevron-right"
        onClick={nextSlideHandler}
      ></i>
    </div>
  );
};

export default Carousel;
