import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      {/* <h1>Hello World!</h1> */}
      {/* <Pizza /> */}
      {/* <Pizza /> */}

      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numpizza = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numpizza > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaobj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 8;
  const closehour = 16;

  return (
    <footer className="footer">
      <div className="order">
        <p>
          We'are currently
          {openhour <= hour && hour <= closehour
            ? " open"
            : ` closed: Come visit us at ${openhour}am to ${closehour}pm or order online`}
        </p>
        <button className="btn">order</button>
      </div>
    </footer>
  );
}

function Pizza({ pizzaobj }) {
  // console.log(props);

  // if (pizzaobj.soldOut)
  //   return (
  //     <li className="pizza">
  //       <img src={pizzaobj.photoName} alt={pizzaobj.name}></img>
  //       <div>
  //         <h3>{pizzaobj.name}</h3>
  //         <p>{pizzaobj.ingredients}</p>
  //         <span>{pizzaobj.price * 3 + 3}</span>
  //       </div>
  //     </li>
  //   );

  return (
    <li className={pizzaobj.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name}></img>
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        {/* {pizzaobj.soldOut ? (
          <span style={{ color: "red" }}>SOLD OUT</span>
        ) : (
          <span>{pizzaobj.price * 3 + 3}</span>
        )}*/}
        <span>{pizzaobj.soldOut ? "Sold Out" : pizzaobj.price * 3 + 3}</span>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
