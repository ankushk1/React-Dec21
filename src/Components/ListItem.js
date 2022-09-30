import React, { useState } from "react";
import commentsData from "./commnetsData.json";
import ItemDetails from "./ItemDetails";

const ListItem = () => {
  const [comments, setComments] = useState(() => commentsData.slice(0, 50));

  console.log(comments);

  return (
    <div>
      <h4>Comments</h4>
      {comments.map((comment, index) => (
         <ItemDetails
          key={index}
          id={comment.id}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </div>
  );
};

export default ListItem;
