
import { useState } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
  }

  const handleEdit = (e, id) => {
    const t = todos.find(i => i.id === id)
    setTodo(t.todo)
    setTodos(todos.filter(i => i.id !== id))
  }

  const handleDelete = (e, id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    const id = e.target.name
    const newTodos = todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    )
    setTodos(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-violet-800">Add a Task</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Type your task here..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              onClick={handleAdd}
              className="bg-violet-700 hover:bg-violet-800 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              Save
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-violet-800 mb-4">Your Tasks</h2>
          {todos.length === 0 ? (
            <div className="text-gray-500 italic">No tasks to display.</div>
          ) : (
            todos.map(item => (
              <div
                key={item.id}
                className="bg-white shadow-sm rounded-lg p-4 mb-4 flex flex-col md:flex-row items-start md:items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name={item.id}
                    onChange={handleCheckbox}
                    checked={item.isCompleted}
                    className="h-5 w-5 text-violet-700"
                  />
                  <p className={`text-lg ${item.isCompleted ? 'line-through text-gray-400' : 'text-gray-800'} font-medium`}>
                    {item.todo}
                  </p>
                </div>
                <div className="mt-3 md:mt-0 flex gap-2">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default App
