import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='bg-orange-500'>Redux Tool-Kit in React</div>
    <AddTodo/>
    <Todos/>

   </>
  )
}

export default App
