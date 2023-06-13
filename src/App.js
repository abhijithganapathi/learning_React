import './App.css';
import Test from './Test'; 
import {NewComponent, NewComponent2} from './NewComponent';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  var [data,setData]=useState("hello world")
  return (
    <div className="App">
      <h1>My First React App</h1>
      <Test sdata={data}></Test>
      <NewComponent></NewComponent>
      <NewComponent2></NewComponent2>
      <Counter></Counter>
    </div>
  );
}

export default App;
