import {React, useState} from 'react';




const Logic=()=>{
    const object={
        firstName:"mubarak",
        lastName:"shaik",
        age:25
    }
    
    const [data, setData]=useState(object);

    const changeHandler=()=>{
        setData({
            ...object,
            firstName:"shaik"
        })
    }
    return(
        <div>
            <h1>{data.firstName}</h1>
            <button onClick={changeHandler}>change Name</button>
            
            <h2>{data.lastName}</h2>
            <h3>{data.age}</h3>
        </div>
    )

}

export default Logic;