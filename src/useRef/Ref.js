import  {React, useState, useRef, useEffect}from 'react';

const Ref=()=>{
    const [type, SetType]=useState('')
    const renderCount=useRef(1)

    useEffect(()=>{
        renderCount.current +=1
    }) 
    return(
<>
<input
type="text"
placeholder='type something'
onChange={(e)=>{
    SetType(e.target.value)
}}

/>
<h1> Type:{type}</h1>
<h2>{renderCount.current} times rendered</h2>
</>
    )
}

export default Ref;