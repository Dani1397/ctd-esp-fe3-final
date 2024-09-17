import { useState } from "react";
import { useDentistStates } from "../Context";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { theme } = useDentistStates();

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (name.length < 3) {
      setNameError("El nombre debe tener al menos 3 caracteres.");
      isValid = false;
    } else {
      setNameError("");
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Por favor, ingrese un correo electrónico válido.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      alert("Formulario enviado correctamente.");
    }
  };

  return (
    <div className={`form ${theme}`}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <span className="error">{nameError}</span>
        <input
          type="email"
          id="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className="error">{emailError}</span>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
