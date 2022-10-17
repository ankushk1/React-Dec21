import React, { useState } from "react";

const ApiCall = () => {
  //state

  const [obj1, setObj1] = useState({
    inputVal: "",
    filter: "",
    subFilter: ""
  });

  console.log(obj1);
  const obj = {
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz"
  };

  const onHandleApiCall = () => {
    fetch("localhost:8000/posts", {
      method: "POST",
      Body: JSON.stringify(obj)
    })
      .then((response) => response.json())
      .then((json) => console.log(json)); //setState
  };

  return (
    <div>
      <input
        type="text"
        value={obj1.inputVal}
        onChange={(e) => setObj1({ ...obj1, inputVal: e.target.value })}
      />
      <select
        type="select"
        onChange={(e) => setObj1({ ...obj1, filter: e.target.value })}
      >
        <option value="">None</option>
        <option value="Sub">Sub</option>
        <option value="ID">ID</option>
      </select>

      {obj1.filter && (
        <select
          type="select"
          onChange={(e) => setObj1({ ...obj1, subFilter: e.target.value })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      )}
      <button onClick={() => onHandleApiCall()}>Click</button>
    </div>
  );
};

export default ApiCall;
