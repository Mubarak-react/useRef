import { useState } from "react";

function Post(){

    const[formData, setFormData]=useState('')
    const handleChange=(e)=>{
        setFormData(e.target.value)
    }


    return(
        <>
        <div>
            title<input type='text' placeholder='enter something' value={formData} onChange={handleChange} /><br/>
            body<input type='text'  placeholder='enter something' value={formData}  onChange={handleChange} /><br/>
            <button>submit</button>
        </div>
        </>
    )
}


export default Post;