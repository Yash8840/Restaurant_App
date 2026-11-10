import React, { useEffect, useState } from 'react'

const User = ({name}) => {

  const[count,setCount] = useState(0);
  useEffect(()=>{
    let timer = setInterval(()=>{
      console.log("Namaste React OP");
    },1000);

    return ()=>{
      clearInterval(timer);
      console.log("Namaste React Clear Interval");
    }
  },[count])
  return (
    <div className='user-card'>
      <h2>name:{name}</h2>
      <h2>Location : </h2>
      <h2>Contact</h2>
      <p>This is functional component</p>
      <button onClick={()=>{
        setCount(count+1);
      }}>increase count : {count}</button>
    </div>
  )
}

export default User