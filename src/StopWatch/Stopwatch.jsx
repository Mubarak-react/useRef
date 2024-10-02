import { useState, useEffect, useRef, Fragment } from "react";

const StopWatch=()=>{

    const [count, setCount]=useState(0);
    const countRef=useRef();

 const handleIncrement=()=>{
    countRef.current=setInterval(() => {

        setCount(count=>count+1)
     },1000);
 }
 const handleStop=()=>{ 
    clearInterval(countRef.current)
 }

 const handleContinue=()=>{
    handleIncrement()
 }
    return(
       <Fragment>
       


        <h1>Count:{count}</h1>
        <button onClick={handleIncrement}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleContinue}>Continue</button>
       </Fragment>
    )

}


export default StopWatch;
// const StopWatch=()=>{
//     const[count, setCount]=useState(0)
//   const [isRunning, setIsRunning] =useState()
//     const timer=useRef();

//     useEffect(()=>{
//         if(isRunning){
//             timer.current=setInterval(()=>{
//                 setCount(count=>count+1)
//             },1000)
//         }else{
//             clearInterval(timer.current)
//         }
//         return()=>clearInterval(timer.current)
//     },[isRunning])

//     const HandleStart=()=>{
//         setIsRunning(true)

//     }
//     const HandleStop=()=>{
//         setIsRunning(false)

//     }
//     const HandleContinue=()=>{
//         setIsRunning(true)

//     }
//      return(
//       <Fragment style={{ textAlign: 'center' }}>
//         <h1>count:{count}</h1>
//         <button onClick={HandleStart}>Start</button>
//         <button onClick={HandleStop}>Stop</button>
//         <button onClick={HandleContinue}>Continue</button>
//         </Fragment> 
//     )
// }

// export default StopWatch;























// const [count, setCount] = useState(0);
//   const [isActive, setIsActive] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
 
//   useEffect(() => {
//     let interval = null;

//     if (isActive && !isPaused) {
//       interval = setInterval(() => {
//         setCount(prevCount => prevCount + 1);
//       }, 1000); // Count every second
//     } else if (!isActive || isPaused) {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isActive, isPaused]);

//   const start = () => {
//     setIsActive(true);
//     setIsPaused(false);
//   };

//   const stop = () => {
//     setIsActive(false);
//     setIsPaused(true);
//   };

//   const continueCounting = () => {
//     setIsActive(true);
//     setIsPaused(false);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>{count}</h1>
//       <button onClick={start} >Start</button>
//       <button onClick={stop} >Stop</button>
//       <button onClick={continueCounting} >Continue</button>
//     </div>
//   );
// };
