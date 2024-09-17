import { Link } from "react-router-dom";
import { useDentistStates } from "../Context";

const Navbar = () => {
  const { theme, setTheme } = useDentistStates();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className={theme}>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
