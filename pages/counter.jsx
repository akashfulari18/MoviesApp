import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] =useState(0)
  return (
    <div>Counter :{count}
    
    <button>add</button></div>
  )
}

export default Counter