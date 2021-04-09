import React from 'react'   

import {BiXCircle } from "react-icons/bi";
const Todolists =(props)=>{
  
    return (<>

   
    <div className="liststyle"><li>{props.elements}</li>
    <BiXCircle onClick={
        ()=>{props.onSelect(props.id)}} />
    </div></>
    )
}
    

export default Todolists;