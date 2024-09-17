import Form from '../Components/Form';
import { useDentistStates } from "../Context";

const Contact = () => {
  const { theme } = useDentistStates();

  return (
    <div className={theme}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;

