import { useParams } from "react-router-dom";
import data from "../datas/logements.json";
import Rating from "../components/Rating";
import DropDown from "../components/DropDown";
import Carousel from "../components/Carousel";

const Lodgement = () => {
  let { lodgeId } = useParams();
  const lodge = data.find((lodge) => lodge.id === lodgeId);

  document.title = `Kasa - ${lodge.title}`;

  return (
    <div id="lodge">
      <Carousel pictures={lodge.pictures} name={lodge.title} />
      <h3>{lodge.title}</h3>
      <h4>{lodge.location}</h4>

      <ul className="tags">
        {lodge.tags.map((tag, index) => (
          <li key={tag + index}>{tag}</li>
        ))}
      </ul>
      {/* <div className="profil">
        <p>{lodge.host.name}</p>
        <img src={lodge.host.picture} alt={lodge.host.name} />
      </div>

      <Rating /> */}
      <DropDown title="Description" description={lodge.description} />
    </div>
  );
};

export default Lodgement;
