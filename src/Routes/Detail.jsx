import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDentistStates } from "../Context";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const { theme, images } = useDentistStates();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    axios(url).then((res) => {
      setDetail(res.data);
    });
  }, [url]);

  const dentistImage = images.find((dentist) => dentist.id === parseInt(id));

  return (
    <div className={`card-detail ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <h1>{detail.name}</h1>
      {dentistImage && <img src={dentistImage.image} alt={detail.name} />}
      <h3>{detail.email}</h3>
      <h3>{detail.phone}</h3>
      <h4>{detail.website}</h4>
    </div>
  );
};

export default Detail;
