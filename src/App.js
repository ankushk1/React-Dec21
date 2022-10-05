import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import ClassComp from "./Components/ClassComp";
import { useState, createContext } from "react";
import ListItem from "./Components/ListItem";
import ComponentA from "./Components/ComponentA";
import FormComponent from "./Components/FormComponent";
import UseReducer from "./Components/UseReducer";

const user = {
  name: "ABC",
  age: 40
};

const arr = [1, 2, 3];

export const messageContext = createContext(null);
function App() {
  const car = {
    carName: "BMW",
    color: "black"
  };

  const [propsFromChild, setPropsFromChild] = useState(null);

  const [mount, setMount] = useState(true);

  const onChangeMount = () => {
    setMount(!mount);
  };
  return (
    <div className="App">
      {/* <h2>
        {user.name}'s age is {user.age}
        <br />
        {arr}
      </h2> */}
      {/* <FirstComponent username="Sam" age={11} numArr={[1,2,3,4]} carObj = {car}>
        {car}
      */}
      {/* <FirstComponent setPropsFromChild={setPropsFromChild}/>
      <div>Div</div> */}
      {/* <ListItem/> */}
      {/* <FirstComponent/>  */}
      {/* {mount ? <FirstComponent /> : null} */}
      {/* <button onClick={onChangeMount}>Mount/unmount</button> */}
      {/* <messageContext.Provider value={"Form component App"}>
        <ComponentA />
      </messageContext.Provider> */}
      {/* <FormComponent/> */}
      <UseReducer/>
    </div>
  );
}

export default App;
