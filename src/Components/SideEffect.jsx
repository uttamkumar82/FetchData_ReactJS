import React, { useEffect, useState } from 'react'

const SideEffect = () => {
    let [count1, setCount1] = useState(0)
    let [count2, setCount2] = useState(10)

    let incre1=()=>{setCount1(count1+1)}
    let incre2=()=>{setCount2(count2+1)}

    useEffect(()=>{
        console.log("Hello")
    },[count1])

  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={incre1}>Increment1</button>

      <h1>{count2}</h1>
      <button onClick={incre2}>Increment2</button>
    </div>
  )
}

export default SideEffect
