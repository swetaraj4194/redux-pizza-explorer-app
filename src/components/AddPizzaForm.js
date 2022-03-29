import { useState } from "react";
import "./pizzaList.css";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/actions";

export default function AddPizzaForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();
    console.log("new pizza", name, description);
    dispatch(addPizza({ name, description }));

    setName(" ");
    setDescription(" ");
  };

  return (
    <div className="Pizza-form">
      <form onSubmit={submit}>
        <h2>Add a new pizza</h2>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Discription:{" "}
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </label>
        </p>
        <p>
          <button type="submit"> Add pizza!</button>
        </p>
      </form>
    </div>
  );
}
