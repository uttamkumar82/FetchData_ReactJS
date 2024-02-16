import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData2 = () => {
let [content, setContent] = useState([])
let [id, setId] = useState("")
let [btn, setBtn] = useState("")

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
        .then((response)=>{
          setContent(response.data)
          console.log("Got the Data");
          console.log(response.data)
        }).catch(()=>{
            console.log("Something is wrong");
        })
    },[btn])
    
let iddata = (e)=>{
setId(e.target.value)

}

let formHandle=()=>{
setBtn(id)
}

  return (
    <div>
      <input type="text" value={id} onChange={iddata}/>
      <button onClick={formHandle}>FetchData</button>
      <h1>{content.title}</h1>
    </div>
  )
}

export default FetchData2
