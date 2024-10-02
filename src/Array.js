import React, { useState, Fragment } from 'react';
import Arr2 from './Arr2.js'
const Array=()=>{

    const [count, setCount]=useState(0)

    const Increment=()=>{
        
      
        setCount(count+1)
     

    }
    const Decrement=()=>{
        setCount(count-1)
    }
    return(
        
        <Fragment>
        <div className='Center'>
             <Arr2 />

       
          
        </div>
        </Fragment>
    )
}


export default Array;