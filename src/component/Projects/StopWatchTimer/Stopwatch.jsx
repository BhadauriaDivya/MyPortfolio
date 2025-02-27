import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Stopwatch = () => {
  const [time,setTime]=useState({hr:0,min:0,sec:0,milli:0})
  const [status,setStatus]= useState()
  const [isStart,setIsStart]= useState(false)

  let updHr=time.hr;
  let updMin=time.min;
  let updSec=time.sec;
  let updMilli=time.milli;

  const start=()=>{
    myFun();
    setStatus(setInterval(myFun,10))
    setIsStart(true)
  }
  const stop=()=>{
    clearInterval(status)
    setIsStart(false)
  }
  const reset=()=>{
    clearInterval(status)
    setTime({hr:0,min:0,sec:0,milli:0})
    setIsStart(false)
  }
  const myFun=()=>{
    if(updMilli==99){
      updMilli=0;
      updSec++
    }
    if(updSec==59){
      updSec=0;
      updMin++
    }
    if(updMin==59){
      updMin=0;
      updHr++
    }
    updMilli++
    return setTime({hr:updHr,min:updMin,sec:updSec,milli:updMilli})
  }


  return (
    <div>
      <Link to="/project/watch"><button className='backbtn'>Back</button></Link>
    <div className='stopwatch'>
      <div className='time'>
        {time.hr<10?`0${time.hr}`:time.hr}
          : 
        {time.min<10?`0${time.min}`:time.min}
          :
        {time.sec<10?`0${time.sec}`:time.sec}
          :
        {time.milli<10?`0${time.milli}`:time.milli}
      </div>
      {!isStart && <button className='start' onClick={start}>Start</button>}
      {isStart && <button className='stop' onClick={stop}>Stop</button>}
      <button className='reset' onClick={reset}>Reset</button>
    </div>
    <div  id="stopwatch">
      <p style={{textAlign:'center'}}>© 2025 Divyanshi Bhadauria </p>
      </div>
    </div>
  )
}

export default Stopwatch