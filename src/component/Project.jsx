import React from 'react'
import TicTacToe from './Images/TicTacToe.png'
import Amazon from './Images/Amazon.png'
import ToDoList from './Images/ToDoList.png'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className="project">
    <h1>Project</h1>
    <div className="yellowline"/>
    <div className="cardd">
      <div className="card">
        <Link to="/project/todo">
            <img src={ToDoList} className='card-img'/>
            <div>
              <h2>ToDo List</h2>
              Click 
            </div>
        </Link>
        </div>
        <div className="card">
        <Link to="#">
            <img src={TicTacToe} className='card-img'/>
            <div>
              <h2>Tic Tac Toe</h2>
              <p></p>
              Click 
            </div>
        </Link>
        </div>
        <div className="card">
        <Link to="#">
            <img src={Amazon} className='card-img'/>
            <div>
              <h2>Amazon Clone</h2>
              <p></p>
              Click 
            </div>
        </Link>
        </div>
        <div className="card">
        <Link to="#">
            <img src={ToDoList} className='card-img'/>
            <div>
              <h2>Project</h2>
              <p></p>
              Click 
            </div>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Project