import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'
import './component/Style.css'
import Home from './component/Home'
import Todo from './component/Projects/TodoList/Todo'
import Tic from './component/Projects/TicTakToe/Tic'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Routes>
        <Route exact path="*" element={<Home/>} />
        <Route path="/project/todo" element={<Todo/>} />
        <Route path="/project/tictactoe" element={<Tic/>} />
    </Routes>
    </>
  )
}

export default App
