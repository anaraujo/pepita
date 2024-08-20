import { Link } from "react-router-dom";
// import serializeForm from "form-serialize";

const CreateCoffee = ({ onAddCoffee }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(onAddCoffee);
    // const values = serializeForm(e.target, { hash: true });

    // if (onAddCoffee) {
    //   onAddCoffee(values);
    // }
  };
  return (
    <div>
      <Link to="/">Close</Link>
      <form onSubmit={handleSubmit}>
        <div className="create-contact-details">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="handle" placeholder="Handle" />
          <button>Adicionar café</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCoffee;
