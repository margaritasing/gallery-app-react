import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState({});

  const peticion = async () => {
    const res = await fetch(
      "https://api.unsplash.com/photos/random/?client_id=ZYRLj7ZrlGTA2w6S1SOu_THQRZQvmTA4IlJMk-2rVQ0"
    );

    const data = await res.json();
    console.log(data);

    setImages(data);
  };

  useEffect(() => {
    peticion();
  }, []);

  return (
    <div className="cards">
      <Card img={images.urls.regular} />
    </div>
  );
};

export default Cards;
