import './App.css'
import { useState } from "react"
import Task from './Task'


 function App() {
const [todoList,setTodoList] = useState([]);
const [newTask,setNewTask] = useState("");

const handleChange = (event) => {
setNewTask(event.target.value)
}

const addTask = () => {

  const task = {
    id:todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1 ,
    taskName:newTask,
    completed: false
   }
  const newTodoList  = [...todoList, task]
  setTodoList(newTodoList)
}

const deleteTask = (id) => {

  setTodoList(todoList.filter((task) => task.id !== id));


  // const newTodoList = todoList.filter((task) => {
  //     if(task === taskName) {
  //       return false
  //     } else {
  //       return true;
  //     }
  // }) 

  // setTodoList(newTodoList);
}

const completeTask = (id) => {
  setTodoList(
    todoList.map((task) => {
      if(task.id === id) {
        return {...task, completed:true}
      } else {
        return task;
      }
    })
  )
}
   
  return (
    <>
      
      <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
       {todoList.map((task) => {
        return (
        <div key className="task" 
        style = {{backgroundColor:completeTask ?  "green":"white"}}>
          <h1>{task.taskName}</h1>
          <button onClick={() => completeTask(task.id)}>Complete</button>
          <button onClick={() => deleteTask(task.id)}>X</button>
          
        </div>
        );
       })}
      </div>
    
    </>
  )

}

export default App