import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const readTodos = ()=>{
    const readMemory = localStorage.getItem('List')
    if(readMemory){
      return JSON.parse(readMemory)
    }else{
      return []
    }
  }

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(readTodos)
  console.log(todos)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input!==''){
    setTodos([...todos, input])
    setInput('')
    }
  }
  useEffect(()=>{
    localStorage.setItem('List',JSON.stringify(todos))
  },[todos])

  const handleClick = () =>{
    const userConfirmed = window.confirm('Are you sure? This will clear all items!');

  // If the user clicks "OK", proceed to clear localStorage and reset todos
  if (userConfirmed) {
    localStorage.clear();
    setTodos([]);
  }
  }

  return (
    <div className='bg-stone-200'>
      <form onClick={handleSubmit}>
      <input 
      type="text" 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='Enter your Todos'
      />
      <button type='submit'>Add</button>
      <button onClick={handleClick}>Clear List</button>
      
      </form>
      <ul>
        {todos.map((item, idx)=>(
          <li key={idx}>{item}</li>
        ))}

      </ul>
    </div>
  )
}

export default App
