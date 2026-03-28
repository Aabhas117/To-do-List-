import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';

import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleEdit = () => {

  }

  const handleDelete = (e, id) => {

    let newTodos = todos.filter(item => {
      return item.id !== id

    });
    setTodos(newTodos)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id)
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    console.log(index)
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)

  }
  return (
    <>
      <Navbar />
      <div className="container  my-5 rounded-xl py-5 bg-violet-100 min-h-[80vh] mx-auto">
        <div className="addtodo">
          <h2 className='text-lg font-bold my-5 mx-3'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/3 bg-white rounded-3xl cursor-pointer mx-3' />
          <button onClick={handleAdd} className='bg-violet-500 hover:bg-yellow-200 p-3 py-1 text-sm font-bold rounded-3xl text-grey mx-3'>Add</button>
        </div>
        <h2 className='text-lg font-bold mx-3'>You Todos</h2>
        <div className="todos mx-3">
          {todos.length ===0 && <div className='m-3'>No Todos to display</div>}
          {todos.map(item => {


            return <div key={item.id} className="todo flex w-1/3 my-3 justify-between">
              <div className='flex gap-4'>


                <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-500 hover:bg-yellow-200 p-3 py-1 text-sm font-bold rounded-3xl text-grey mx-1' >Edit</button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-500 hover:bg-yellow-200 p-3 py-1 text-sm font-bold rounded-3xl text-grey mx-1' >Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App 