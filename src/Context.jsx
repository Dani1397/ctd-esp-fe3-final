import axios from "axios";
import { useContext, useEffect, useState, createContext } from "react";

const DentistStates = createContext();

const Context = ({ children }) => {
  const [theme, setTheme] = useState("light"); 
  const [favs, setFavs] = useState([]); 
  const [list, setList] = useState([]); 
  const [images, setImages] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const localUrl = "http://localhost:3001/dentist";

  useEffect(() => {
    axios(url).then((res) => {
      setList(res.data); 
    });

    axios(localUrl).then((res) => {
      setImages(res.data); 
    });
  }, []);

  return (
    <DentistStates.Provider value={{ theme, setTheme, favs, setFavs, list, images }}>
      {children}
    </DentistStates.Provider>
  );
};

export default Context;

export const useDentistStates = () => {
  return useContext(DentistStates);
};
