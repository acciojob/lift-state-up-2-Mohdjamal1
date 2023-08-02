
import React, {useState} from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {

  let [data,setData] = useState("");
 let obj = {data,setData};
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <p>{data}</p>
        <Child obj={obj}/>
    </div>
  )
}

export default App
