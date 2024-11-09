//import logo from "./logo.svg";
import d1 from "./d1.jpg";
import "./App.css";
import Harsh from "./Harsh";
import Netflix from "./Comp/Netflix";
//import Myheader from "./Myheader";
//import Myfooter from "./Myfooter";
import IFelse from "./Comp/IFelse";
import IFelseLadder from "./Comp/IFelseLadder";
import Ternaryop from "./Ternaryop";
import Listdemo from "./Listdemo";

function App() {
  const mypara = {
    color: "Red",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "pink",
    marginBottom: "20px",
  };

  const myname = "Mukesh";
  //console.log(myname);
  const a = 99;
  const b = 55;

  const Myfun = () => {
    alert("Hello TgCian");
  };

  return (
    <div className="App">
      <hr />
      <h1>{myname}</h1>
      <h4>{a + b}</h4>

      <img src={d1} alt="diwali" style={{ border: "3px solid black" }} />

      <h2 style={{ textTransform: "capitalize", color: "blue" }}>about us</h2>
      <p style={mypara}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        maiores deserunt, aspernatur voluptatibus magnam dolor. Nulla voluptates
        iste quia beatae aperiam architecto est a dolor, nam qui? In, error
        quod!
      </p>
      <p style={mypara}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quas
        quia libero provident distinctio voluptatum laboriosam dignissimos
        consequatur sapiente, ut vero voluptatibus facere obcaecati magni saepe
        dolore error facilis maxime?
      </p>
      <div className="container"></div>
      <button type="button" onClick={Myfun}>
        Click me
      </button>
      <Harsh></Harsh>
      <br />
      <Netflix />
      <br />
      <IFelse />
      <br />
      <IFelseLadder />
      <br />
      <Ternaryop />
      <br />
      <Listdemo />
    </div>
  );
}

export default App;
