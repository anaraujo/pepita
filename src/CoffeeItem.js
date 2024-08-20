const CoffeeItem = ({ coffee }) => {
  const { name, grind, quantity, roastedDate, type, variety, process } = coffee;
  const daysRoasted = Math.floor(
    Math.abs(new Date() - roastedDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <p>Nome: {name}</p>
      <p>Moagem: {grind}</p>
      <p>Quantidade: {quantity}g</p>
      <p>Torrado há {daysRoasted} dias</p>
      <p>Tipo: {type}</p>
      <p>Variedade: {variety}</p>
      <p>Processo: {process}</p>
    </div>
  );
};

export default CoffeeItem;
