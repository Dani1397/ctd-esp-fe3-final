import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context";

const Card = ({ dentistInfo }) => {
  const { theme } = useDentistStates();
  const { images } = useDentistStates();
  const dentistImage = images.find((dentist) => dentist.id === dentistInfo.id);

  const addFav = () => {
    // Aquí iría la lógica para agregar la Card en el localStorage
    console.log(`Adding ${dentistInfo.name} to favorites`);
  };

  return (
    <div className={theme}>
      <img src={dentistImage ? dentistImage.image : ""} alt={dentistInfo.name} />
      <Link to={"/detail/" + dentistInfo.id}>
        <h3>{dentistInfo.name}</h3>
      </Link>
      <p>{dentistInfo.email}</p>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

Card.propTypes = {
  dentistInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
