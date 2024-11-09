import React, { useState, useEffect } from "react";
import "./App.css";

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty array ensures this runs only once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4>Fetching data from Api or Local host</h4>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} {" | "}
            {item.email}
            {" |  "}
            {item.phone}
            {"| "}
            {item.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
