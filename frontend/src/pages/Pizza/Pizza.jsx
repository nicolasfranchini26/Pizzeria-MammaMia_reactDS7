import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardPizza, Header } from "../../components/index";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPizza = async () => {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();
      setPizza(data);
    };

    fetchPizza();
  }, [id]);
  
  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Header />
      <div className="pizza d-flex justify-content-center mb-4">
        <CardPizza
          id={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          desc={pizza.desc}
        />
      </div>
    </>
  );
};

export default Pizza;
