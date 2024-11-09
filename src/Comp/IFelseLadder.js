import React from "react";

function Greet() {
  let today = new Date();
  let hours = today.getHours();
  let greetmsg = "";

  if (hours >= 5 && hours < 12) {
    greetmsg = "Good Morning India";
  } else if (hours > 12 && hours <= 16) {
    greetmsg = "Good After noon India";
  } else if (hours > 16 && hours <= 20) {
    greetmsg = "Good Evening India";
  } else {
    greetmsg = "Good Night India";
  }
  return <h2>{greetmsg}</h2>;
}

const IFelseLadder = () => {
  return (
    <div>
      <p>IFelseLadder</p>
      <Greet />
    </div>
  );
};

export default IFelseLadder;
