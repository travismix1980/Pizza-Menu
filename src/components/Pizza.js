import "../index.css";

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null;
  return (
    <div className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price + 3}</span>
      </div>
    </div>
  );
}

export default Pizza;
