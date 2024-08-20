import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import CoffeeList from "./CoffeeList";
import CreateCoffee from "./CreateCoffee";

const App = () => {
  let navigate = useNavigate();

  const coffees = [
    {
      id: "1",
      name: "Maragogipe",
      grind: "Em Grãos",
      quantity: 250,
      roastedDate: new Date("08/07/2024"),
      type: "Arábica",
      variety: "Maragogipe",
      process: "Natural",
    },
    {
      id: "2",
      name: "Gesha",
      grind: "Em Grãos",
      quantity: 250,
      roastedDate: new Date("08/12/2024"),
      type: "Arábica",
      variety: "Gesha",
      process: "Natural Fermentado",
    },
  ];

  const createCoffee = () => {
    navigate("/");
    console.log("createCoffee");
  };

  return (
    <Routes>
      <Route exact path="/" element={<CoffeeList coffees={coffees} />} />
      <Route
        path="/create"
        element={
          <CreateCoffee
            onAddCoffeereateCoffee={(coffee) => {
              createCoffee(coffee);
            }}
          />
        }
      />
    </Routes>
  );
};

export default App;
