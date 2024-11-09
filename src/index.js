import React from "react";

/* The following line can be included in your src/index.js or App.js file */

import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Myheader from "./Myheader";
import Myfooter from "./Myfooter";
import Car from "./Car";
import Cardexample from "./Cardexample";
import Login from "./Login";
import Example from "./Example";
import Form from "./Form";
import MyComponent from "./MyComponent";
import DataFetchingComponent from "./DataFetchingComponent";
import Counter from "./Counter";
import Fetchapidata from "./Fetchapidata";
import Listdemo from "./Listdemo";
import FormSubmission from "./FormSubmission";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Myheader />
    <FormSubmission />
    {/* <App />
    <Car /> */}
    {/* <Cardexample /> */}
    {/* <Login /> */}
    {/* <Example /> */}

    {/* <Form /> */}
    {/* <Listdemo /> */}
    {/* <MyComponent /> */}
    {/* <Counter /> */}
    {/* <DataFetchingComponent /> */}

    {/* <Fetchapidata /> */}
    <pre></pre>
    <pre></pre>
    <Myfooter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
