import React from "react";

const ItemDetails = ({
  product,
  product: { name, description, price },
  onRedirectView,
  view
}) => {
  return (
    <div className="card text-center mt-3" style={{ width: "18rem" }}>
      {/* <img className="card-img-top" alt="Card image cap" /> */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{price}</li>
      </ul>
      {view && (
        <div className="card-body">
          <button
            className="btn btn-info"
            onClick={() => onRedirectView(product)}
          >
            View Product
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
