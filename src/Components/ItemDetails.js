import React from "react";

const ItemDetails = ({ id, email, body }) => {
  return (
    <div>
      <div>
        {id} <span>{" - " + email}</span>
      </div>
      <div>{body}</div>
      <br />
    </div>
  );
};

export default ItemDetails;
