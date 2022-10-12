import React from "react";
import { useState } from "react";
import { useFetch } from "../utils/useFromHook";

const ApiCallComponent = () => {
  const [value, setValue] = useState("");
  const { data } = useFetch("https://jsonplaceholder.typicode.com", value);

  console.log(data);
  return (
    <div>
      <button onClick={() => setValue("posts")}>Posts</button>
      <button onClick={() => setValue("todos")}>Todos</button>
      <button onClick={() => setValue("comments")}>Comments</button>
    </div>
  );
};

export default ApiCallComponent;
