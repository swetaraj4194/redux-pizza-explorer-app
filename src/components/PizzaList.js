import "./pizzaList.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { toggleFavorite } from "../store/user/actions";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const Pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();
  // const allPizzas = useSelector(selectPizzas);

  return (
    <div className="pizzaList">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{Pizzas.length}</strong> pizzas in total:
      </p>
      <p>TODO: the list of pizzas</p>

      <ul className="pizzas">
        {Pizzas.map((pizza) => {
          return (
            <li key={pizza.id}>

              <button className="btn"
                onClick={() => {
                  dispatch(toggleFavorite(pizza.id));
                }}
              >
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>

              <div className="overlay">
                <strong>{pizza.name}</strong> ({pizza.description}) <br />
                <em>Bought {pizza.bought} times</em>
              </div>

              <hr></hr>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
