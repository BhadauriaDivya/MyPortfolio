import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Timer = () => {
  const [isStart,setIsStart]=useState(false)
  // const [isPause,setIsPause]=useState(false)

  const start=()=>{
    setIsStart(true)
  }
  const reset=()=>{
    setIsStart(false)
  }


  return (
    <div>
      <Link to="/project/watch"><button className='backbtn'>Back</button></Link>
      <div className="tim">
        {!isStart && <div>
        <input id="Hours" placeholder='Hours'/>
        <input id="Min" placeholder='Minutes'/>
        <input id="Sec" placeholder='Seconds'/>
        <div>
        <button className='start' onClick={start}>Start</button>
        </div>
        </div>}
        {isStart && <div>
          {/* {!isPause && <button className='pause' onClick={reset}>Pause</button>} */}
          {/* {isPause && <button className='pause' onClick={reset}>Pause</button>} */}
          <button className='reset' onClick={reset}>Reset</button>

        </div>}
      </div>
    </div>
  )
}

export default Timer