import React from "react";

const PropComp = (props) => {
  const { name, setPropsFromChild } = props;
  const stateChange = () => {
    setPropsFromChild(Math.floor(Math.random() * 200));
  };

  return (
    <div>
      <button onClick={stateChange}>Click</button>
    </div>
  );
};

export default PropComp;
