import  {React, useEffect, useState} from 'react';
import axios from 'axios'

const API="https://jsonplaceholder.typicode.com/photos"

const Effect=()=>{
  const [usersData, setUsersData]=useState([])
  useEffect(()=>{
    GetData()

  },[])

  const  GetData=async()=>{
    const res=await axios.get(API)
    console.log(res)
    setUsersData(res)

  }
  return(
    <>
    {usersData.map((eachObj)=>{
      return(
        <h1>{eachObj.title}</h1>
      )
    })}
    </>
  )
}
export default Effect; 