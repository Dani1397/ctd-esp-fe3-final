import Card from "../Components/Card";
import { useDentistStates } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { list } = useDentistStates();
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {list.map((dentistInfo) => (
          <Card key={dentistInfo.id} dentistInfo={dentistInfo} />
        ))}
      </div>
    </main>
  );
};

export default Home;
