import { useParams } from "react-router-dom";
import data from "../datas/logements.json";
import Rating from "../components/Rating";
import DropDown from "../components/DropDown";
import Carousel from "../components/Carousel";
import PageNotFound from "./PageNotFound";
import Tags from "../components/Tags";

const Lodgement = () => {
  let { lodgeId } = useParams();
  const lodge = data.find((lodge) => lodge.id === lodgeId);

  if (!lodge) {
    return <PageNotFound />;
  }

  document.title = `Kasa - ${lodge.title}`;

  return (
    <div id="lodge">
      <Carousel pictures={lodge.pictures} name={lodge.title} />

      <div className="infos">
        <h3>{lodge.title}</h3>
        <h4>{lodge.location}</h4>
        <Tags tagslist={lodge.tags} />
        <div className="profil-rate">
          <div className="profil">
            <p>{lodge.host.name}</p>
            <img src={lodge.host.picture} alt={lodge.host.name} />
          </div>
          <Rating rate={lodge.rating} />
        </div>
        <div className="details">
          <DropDown title="Description" description={[lodge.description]} />
          <DropDown title="Equipements" description={lodge.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Lodgement;
