import React, { useState } from "react";


const ButtonCounter = () => {
    let [count, setCount] = useState(0)

  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default ButtonCounter
