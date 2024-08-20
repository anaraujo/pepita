import { Link } from "react-router-dom";
import CoffeeItem from "./CoffeeItem";

const CoffeeList = ({ coffees }) => {
  return (
    <div>
      {coffees.map((coffee) => (
        <CoffeeItem key={coffee.id} coffee={coffee} />
      ))}
      <Link to="/create">+</Link>
    </div>
  );
};

export default CoffeeList;
