import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
      setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false}])
      console.log(todos)
    }

    const toggleComplete = id => {
      setTodos (todos.map(todo => todo.id === 
      id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id =>{
      setTodos(todos.filter(todo => todo.id !== id))
    }
  return (
    <div className='ToDoWrapper'>
      <h1>Get working!</h1>
      <ToDoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <ToDo task = {todo} key={index}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default ToDoWrapper