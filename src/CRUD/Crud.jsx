import axios from 'axios'
import { useState, useEffect } from 'react';

// const URL="" 

function CRUD(){
   
const[data, setData]=useState([])
useEffect(()=>{
      getData()
},[])

async function getData(){
    const res =await axios.delete('https://jsonplaceholder.typicode.com/posts/2' ,{
        'title':'main',
        'body': 'mubarak'

    })
    console.log(res.data)
    setData(res.data );

}

    return(
        <>
       <div>
       <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
            </tr>
        </thead>
        <tbody>
            {/* {
                data.map(eachEl=>(
                    <tr key={eachEl.id}>
                        <td>{eachEl.id}</td>
                        <td>{eachEl.title}</td>
                        <td>{eachEl.body}</td>
                    </tr>
                ))
            } */}
        </tbody>
       </table>
       </div>
        </>
    )
}

export default CRUD;