import React from "react";

export default function CardComponent({title, image, alt, price, handleClick }) {
  
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image} alt={alt} />
      <div className="card-body">
        <p className="card-text m-0">{title}</p>
        <p className="card-text m-0 small-text">${price}</p>
        <button className="btn btn-primary" onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
}
