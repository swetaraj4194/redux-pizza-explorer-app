export const addPizza = ({ name, description }) => {
  return {
    type: "pizzas/add",
    payload: {
      name,
      description,
      id: Math.random(),
    },
  };
};
