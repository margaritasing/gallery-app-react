import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  return (
    <div>
      <div className="card m-2" style={{ width: "20rem", height: "auto" }}>
        <img src={img} alt="imagen.png" />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
