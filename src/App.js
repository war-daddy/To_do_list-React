import './App.css';
import To_do from './To_do.jsx';
import React, { useState } from 'react';
function App() {
  const[inputList,SetInputList] = useState("buy Apples");
  const[Items,setItems] = useState([]);
  const itemEvent = (e) =>{
   SetInputList(e.target.value);
  };
  const addItem = () =>{
   setItems((oldItems) =>{
    return [...oldItems,inputList];
   })
   SetInputList(" ");
  };
  const deleteItem = (id) => {
   setItems((oldItems)=>{
    return oldItems.filter((e,i)=>{
       return i !== id;
    })
   })
  };
  return (
    <div className="App">
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To DO List</h1>
          <br />
          <input type="text" placeholder='Add a Item' onChange={itemEvent} value={inputList} />
          <button className="btn" onClick={addItem}>+</button>
          <ol>
          {Items.map((itemval,index)=>{
            return <To_do 
            id = {index}
             key = {index}
              text = {itemval}
              onSelect ={deleteItem}
              />
            })}
            
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
