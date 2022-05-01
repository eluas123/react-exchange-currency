import React, { useEffect, useState } from 'react'

export default function DateTime() {
  const [time,setTime] =useState([]);

  useEffect(()=>{
    setInterval(() => {
      setTime([new Date().toLocaleTimeString(),new Date().toLocaleDateString()])
    }, 1000);
  
  },[])
    // let showDate = new Date();
    // let displayTodaysDate = showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();
    // let dateString = showDate.toDateString();
    // let getTime = showDate.getHours()+':'+showDate.getMinutes()+":"+showDate.getSeconds();


  return (
   <div>
   <h3>Date - {time[1]} {new Date().toDateString()}</h3>
   <h3>Time - {time[0]}</h3>
   </div>
  )
}
