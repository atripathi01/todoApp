import React ,{ Component, useState } from 'react';
import './App.css';
import { IoAddCircleSharp } from "react-icons/io5";
import Todolists from './Component/todolist'

const App =()=> {
 
   
    const [additems , setAdditems]= useState("");
    const [items ,setItems] =  useState([]);

    const itemSelect =(addone)=>{
           setAdditems(addone.target.value)
    };
    const itemlists=()=>{
         setItems((per_items)=>{
           return[...per_items,additems];
         })
         setAdditems("");
    };
    const deleteelements =(id) =>{


      setItems((per_items)=>{
        return per_items.filter((array,index)=>{
          return index!==id;
        });
      });
  };
  
  return (
    <div className="App">
      <div className="td--1">
        <h1>Todo List</h1>
        <br />
        <input className="inputbox" type="text"  placeholder="Add the items" onChange={itemSelect} value={additems} required></input>
        <button  onClick={itemlists} ><IoAddCircleSharp /></button>

        
        <ol>
         
           {items.map((allitems ,index) => {
            return <Todolists 
            key={index}
            id={index}
              elements ={allitems}
              onSelect={deleteelements}
            />;
           })}
        </ol>
      </div>
    </div>
  );
}


export default App;
