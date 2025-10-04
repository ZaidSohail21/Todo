<!-- // import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './Components/Navbar'
// import { v4 as uuidv4 } from 'uuid';

// function App() {
//   const [count, setCount] = useState(0)
//   const [todo, settodo] = useState("")
//   const [todos, settodos] = useState([])
  

//   const handleAdd = () => {
//     settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
//     settodo("")
//   }
//   const handleEdit = (e,id) => {
//     let t=todos.filter(i=> i.id===id)
//     settodo(t[0].todo)
//     let newTodo=todos.filter(i=>{
//       return i.id!==id;
//     })
// settodos(newTodo)

//   }
//   const handleDelete = (e,id) => {
   

//     let newTodo = todos.filter(item=>{
//       return item.id!==id;
//     });
//     settodos(newTodo)
//   }
//   const hangleChange = (e) => {
//     settodo(e.target.value)

//   }
//   const handleCheckbox = (e) => {
//     let id = e.target.name
//     console.log(id)
//     let index = todos.findIndex(item => {
//       return item.id === id
//     })
//     console.log(index)
//     let newTodo = [...todos];
//     newTodo[index].isCompleted = !newTodo[index].isCompleted
//     settodos(newTodo)
//     console.log(newTodos, todos)
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="container bg-violet-300 min-h-[80vh] mx-auto rounded-xl my-5">
//         <div className="addtodo">
//           <h2 className='text-lg font-bold mx-4'>Add a Todo</h2>
//           <input onChange={hangleChange} value={todo} type="text" className=' w-1/2 mx-3 my-3 h-10' placeholder='  Type here....' />
//           <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-900 text-white p-2 rounded-xl
//         mx-6 font-bold'>Save</button>
//         </div>
//         <h2 className='text-lg font-bold mx-3'>Your Todo</h2>
//         {todos.length==0&&<div className='m-5'>No Todo display</div>}
//         {
//           todos.map(item => {
//             return <div key={item.id} className="todo flex w-3/4 my-3 mx-2 justify-between">
//               <div>

//               <input type="checkbox" name={item.id} onChange={handleCheckbox} value={item.isCompleted} className='mx-3' />
//               </div>
//               <div className={item.isCompleted ? "line-through font-bold" : ""}>
//                 {item.todo}
//               </div>
              
//               <div className="btn">
//                 <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-violet-800 hover:bg-violet-900 text-white p-2 rounded-xl
//         mx-1 font-bold'>Edit</button>
//                 <button onClick={(e)=>{handleDelete(e,item.id)} } className='del bg-violet-800 hover:bg-violet-900 text-white p-2 rounded-xl
//         mx-1 font-bold'>Delete</button>
//               </div>
//             </div>
//           })
//         }

//       </div>
//     </>
//   )
// }

// export default App -->
<!-- // import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <nav className=' flex  text-white py-6 bg-violet-800'>
//         <div className="logo">
//             <span className=' font-bold text-3xl mx-8 italic'>I-Task</span>
//         </div>
//         <ul className='flex justify-center mx-10 gap-9'>
        
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navbar -->