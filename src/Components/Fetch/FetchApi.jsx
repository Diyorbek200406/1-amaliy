import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Fetch.scss";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all
        `);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((item) => (
        <p key={item.name.common}>{item.name.common}</p>
      ))}
    </>
  );
};

export default FetchApi;
