import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://images.unsplash.com/photo-1643721859448-4d241d04448b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDE5NDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ5NDkzODA&ixlib=rb-1.2.1&q=80&w=1080"
          className="card-img-top"
          alt="imagen.png"
        />
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
