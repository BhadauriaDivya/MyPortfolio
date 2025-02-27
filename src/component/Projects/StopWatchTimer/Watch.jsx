import React from 'react'
import Stopwatch from './Stopwatch'
import Timer from './Timer'
import './Watchcss.css'
import { Link } from 'react-router-dom'

const Watch = () => {
  return (
    <div className='watch'>
        <Link to="/project/watch/stopwatch"><button><b><i>StopWatch</i></b></button></Link>
        <Link to="/project/watch/timer"><button><b><i>Timer</i></b></button></Link>
    </div>
  )
}

export default Watch