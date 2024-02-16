import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = () => {
let [content, setContent] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
          setContent(response.data)
          console.log(response.data)
            console.log("Got the Data");
        }).catch(()=>{
            console.log("Something is wrong");
        })
    },[])
  return (
    <div>
      {content.map((x)=>{
        return(
          <div>
            <h1>{x.id}</h1>
            <h1>{x.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default FetchData
