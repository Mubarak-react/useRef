import {React, useState, useRef, useEffect} from "react";


function Counter (){
  const [state, setState]=useState('');
  const reRender=useRef(1)

  useEffect(()=>{
    reRender.current ++;

  });
  return(

    <div>
      <input 
      type="text"
      
      onChange={(e)=>{
        setState(e.target.value);
      }} 
      />
      <h1>Entered Text: {state} </h1>
      <h5> {reRender.current}</h5>
    </div>
   
  )
  
  
}

export default Counter;