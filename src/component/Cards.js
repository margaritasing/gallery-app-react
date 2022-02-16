import { cleanup } from "@testing-library/react";
import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(true);

  const peticion = useCallback(async () => {
    const key = "client_id=ZYRLj7ZrlGTA2w6S1SOu_THQRZQvmTA4IlJMk-2rVQ0";

    let route = `https://api.unsplash.com/photos/?${key}`;

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${key}`;
    }

    setLoading(true);

    let res = await fetch(route);

    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [input, peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };

  return (
    <div className="cards text-center">
      <hr />
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          Buscar: <input className="w-100" type="text" name="inputText" />
        </label>
        <button type="submit" className="btn btn-warning m-2">
          <span className="material-icons">search</span>
        </button>
      </form>
      <hr />

      {loading && <Loading />}
      <div className="row">
        {images.map((img) => {
          return (
            <div className="col">
              <Card key={img.id} img={img.urls.regular} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
