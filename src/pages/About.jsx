import React from "react";
import Banner from "../components/Banner";

const About = () => {
  const img_banner = {
    src: "./assets/imgs/about_banner.jpg",
    name: "About Banner",
    text: "",
  };
  return (
    <div>
      <Banner img={img_banner} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        voluptates quod, distinctio ipsa quae debitis ex quam. Quia, labore!
        Molestiae vitae distinctio recusandae aliquam architecto consequuntur
        hic quibusdam? Voluptatibus aperiam provident cum veritatis. Quisquam
        temporibus repudiandae est corporis facere id porro, quidem ullam aut?
        Fugiat, distinctio esse odit sint hic voluptate facere sed nisi
        repellendus voluptatibus optio reprehenderit molestias. Alias ullam iure
        eaque at fuga nisi quae esse, cupiditate laborum asperiores quos
        exercitationem minima aspernatur. Non quidem quam animi mollitia, aut
        est molestias ab neque id earum exercitationem aspernatur recusandae
        enim, delectus omnis qui. Quibusdam sequi facilis officia numquam
        laboriosam.
      </p>
    </div>
  );
};

export default About;
