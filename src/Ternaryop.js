import React from "react";

const Myfun = () => {
  let a = 900;
  let b = 899;
  let high = 0;
  high = a > b ? a : b;
  return <h4>{`highest values is ${high}`}</h4>;
};

const Ternaryop = () => {
  return (
    <div>
      <h2>Ternaryop Example</h2>Ternaryop
      <Myfun />
    </div>
  );
};

export default Ternaryop;
