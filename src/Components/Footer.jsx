import { useDentistStates } from "../Context";


const Footer = () => {
  const { theme } = useDentistStates();
  return (
    <footer className="footer">
      <img src="/images/DH.ico" alt="Icono DH" className="footer-icon" />
      <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
