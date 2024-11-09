import React from "react";
import { useState, useEffect } from "react";

const Fetchapidata = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyapi.online/api/movies")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log(data);
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
      <h4>Fetching data from Api </h4>
      <div className="container-fluid">
        {data.map((item) => (
          <div className="card mb-3" key={item.id}>
            <h3>{item.id}</h3>
            <p>{item.movie}</p>
            <img src={item.image} alt="movie" />
            <p>{item.imdb_url}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetchapidata;
