import { useState } from "react";

const withCounter = (PrevComp) => (props) => {
  const [count, setCount] = useState(0);

  console.log(props);
  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <PrevComp count={count} onIncrement={onIncrement} onDecrement={onDecrement} name={props.name} age={props.age}/>
    </div>
  )
};


export default withCounter;