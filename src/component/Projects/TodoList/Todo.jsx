import React, { useState } from 'react'
import './TodoStyle.css'
import { CiLinkedin } from 'react-icons/ci';
import { Link } from 'react-router-dom'

const Todo = () => {
  const [todo,setTodo]=useState([]);

  const [inputvalue,setInput]=useState("");
  const [isVisible, setIsVisible] = useState(false)

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(inputvalue){
          setTodo([...todo,inputvalue]);
          setInput("");
          setIsVisible(!isVisible)
          setIsVisible(true);
      }
  }

  const handleChange=(e)=>{
      setInput(e.target.value);
  }

  return (
    <div className='full'>
      <div className="xyz">
        <h1>Todo List</h1>
        <div className='formstyle'>
        <form onSubmit={handleSubmit}>
            <input className='inp' type="text" value={inputvalue} onChange={handleChange} placeholder="Enter the Task"/>
            <button type="submit" className='butto'>Submit</button>
        </form>
        {isVisible &&
        <div className='boxy'>
          <br/>
          <h3>Your list</h3>
        <ol>
            {
              todo.map((todo,i)=>(
                  <li key={i} className='listcol'>{todo}</li>
              ))
            }
        </ol>
        </div>}
      </div>
    </div>
    <div className="footer">
      <p style={{textAlign:'center'}}>© 2025 Divyanshi Bhadauria </p>
      
      </div>
    </div>
  )
}

export default Todo