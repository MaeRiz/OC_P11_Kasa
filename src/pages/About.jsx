import React, { useEffect } from "react";
import Banner from "../components/Banner";
import img_banner from "../assets/imgs/about_banner.jpg";
import DropDown from "../components/DropDown";

const About = () => {
  const banner = {
    src: img_banner,
    name: "About Banner",
    text: "",
  };

  const fiability_dd = {
    title: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  };

  const respect_dd = {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  };
  const service_dd = {
    title: "Service",
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  };
  const security_dd = {
    title: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };

  useEffect(() => {
    document.title = "Kasa - A Propos";
  }, []);

  return (
    <div id="about">
      <Banner img={banner} />
      <DropDown
        title={fiability_dd.title}
        description={[fiability_dd.description]}
      />
      <DropDown
        title={respect_dd.title}
        description={[respect_dd.description]}
      />
      <DropDown
        title={service_dd.title}
        description={[service_dd.description]}
      />
      <DropDown
        title={security_dd.title}
        description={[security_dd.description]}
      />
    </div>
  );
};

export default About;
