import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const FetchData3 = () => {
    let [content, setContent] = useState([])

    useEffect(() => {
        axios.get("https://api.github.com/users")
        .then((response)=>{
            setContent(response.data)
            console.log("Got the data")
            console.log(response.data)
        }).catch(()=>{
            console.log("Error is happening")
        })
    },[])
  return (
    <div>
      {content.map((x)=>{
        return(
            <div>
                <h1>{x.id}</h1>
                <img src={x.avatar_url} alt=""/>
            </div>
        )
      })}
    </div>
  )
}

export default FetchData3
