import React from "react";

function Oddeven(props) {
  let num = parseInt(props.data);
  if (num % 2 === 0) {
    return <p>Even Number</p>;
  } else {
    return <p>Odd number</p>;
  }
}

const Fullname = (props) => {
  return <h3>{props.fname + " " + props.lastname}</h3>;
};



const IFelse = () => {
  return (
    <div>
      <h3> IFelse Example</h3>
      <Oddeven data="670" />
      <Fullname fname="harsh" lastname="Gaharwar" />
    </div>
  );
};

export default IFelse;
