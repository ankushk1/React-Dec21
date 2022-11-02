import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./Components/FirstComponent";
import ClassComp from "./Components/ClassComp";
import { useState, createContext } from "react";
import ListItem from "./Components/ListItem";
import ComponentA from "./Components/ComponentA";
import FormComponent from "./Components/FormComponent";
import UseReducer from "./Components/UseReducer";
import UseRef from "./Components/UseRef";
import UseIdHooks from "./Components/UseIdHooks";
import UseMemo from "./Components/UseMemo";
import UseCallback from "./Components/UseCallback";
import UseFormComp from "./Components/UseFormComp";
import ApiCallComponent from "./Components/ApiCallComponent";
import CounterComp from "./HOC/CounterComp";
import HoverComp from "./HOC/HoverComp";
import PropComp from "./Components/PropComp";
import ApiCall from "./Components/ApiCall";
import Todo from "./Components/Todo";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CounterRedux from "./Components/CounterRedux";

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
      {/* <UseReducer/> */}
      {/* <UseRef/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      {/* <UseFormComp/> */}
      {/* <ApiCallComponent/> */}
      {/* <CounterComp name={"Sam"}/>
      
      <br />
      <HoverComp age={10}/> */}
      {/* <PropComp name="Sam" setPropsFromChild={setPropsFromChild} /> */}
      {/* <ApiCall/> */}
      {/* <Todo/> */}
      {/* <CounterRedux /> */}
      <ClassComp name="abc"/>
    </div>
  );
}

export default App;
