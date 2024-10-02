// src/Stopwatch.js
import  {React, useState, useEffect} from 'react';
import StopWatch from './StopWatch/Stopwatch';
import Post from './CRUD/Post';
import Flex from './FlexBox/Flex'


const App=()=>{

  const [count, setCount]=useState(1)
  const [text, setText]=useState(1)

  const submitText=()=>{
    setCount(count+1)
    setText(count*3)
  
  }

  // useEffect(()=>{
  //   submitText()
  // },[count])

  return(
    <>
    {/* <CRUD/> */}
    {/* <Flex/> */}
    {/* <Post/> */}


    <div>
       <h1>Main value:{count}</h1>
        <button onClick={submitText}>submit</button>
        <h1>Multiplied value:{text}</h1>
    </div>
    </>
  )
}

export default App;
