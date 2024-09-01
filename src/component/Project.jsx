import React from 'react'
import TicTacToe from './TicTacToe.png'
import Amazon from './Amazon.png'

const Project = () => {
  return (
    <div className="project">
    <h1>Project</h1>
    <div className="yellowline"/>
    <div className="cardd">
        <div className="card">
            <img src={TicTacToe} className='card-img'/>
            <div>
              <h2>Tic Tac Toe</h2>
              <p></p>
              <a href="#">Go somewhere</a>
            </div>
        </div>
        <div className="card">
            <img src={Amazon} className='card-img'/>
            <div>
              <h2>Amazon Clone</h2>
              <p></p>
              <a href="#">Go somewhere</a>
            </div>
        </div>
        <div className="card">
            <img src="" className='card-img'/>
            <div>
              <h2>ABC</h2>
              <p></p>
              <a>Go somewhere</a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Project