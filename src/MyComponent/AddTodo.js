import React, { useState } from "react"
export const Addtodo = (props)=>{
    const[title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || ! desc){
            alert("title or description is missing")
        }
        else{
            props.Addtodo(title,desc)
        }

    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
    <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlfor="title">Todo title:</label>
    <input type="text" value={title} onChange={(e)=>{
        setTitle(e.target.value)
    }}></input>
  </div>
  <div className="mb-3">
    <label htmlfor="description">Description:</label>
    <input type="text" value={desc} onChange={(e)=>{
        setDesc(e.target.value)
    }} ></input>
  </div>
  <button type="submit" class="btn btn-primary btn-sm btn-success">Add</button>
</form>
</div>
    )

}