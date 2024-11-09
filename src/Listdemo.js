import React from "react";
import "./App.css";

function Car(props) {
  return (
    <li style={{ listStyleType: "none" }}>
      {props.id} {props.brand} {props.model}
    </li>
  );
}

const Listdemo = () => {
  let cars = [
    { id: 1, brand: "Huyndai", model: "creta" },
    { id: 2, brand: "Honda", model: "amaze" },
    { id: 3, brand: "Suzuki", model: "Breza" },
    { id: 4, brand: "BMW", model: "CL7" },
  ];

  return (
    <div className="App">
      <p>Listdemo</p>
      <h4>List Of Cars</h4>
      <ul>
        {cars.map((car) => (
          <Car id={car.id} brand={car.brand} model={car.model} />
        ))}
      </ul>
    </div>
  );
};

export default Listdemo;
