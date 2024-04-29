import React, {useEffect, useState} from 'react'
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

    const allCompleted = 
    todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <div className='ToDoWrapper'>
      <h1>Get working!</h1>
      <ToDoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <ToDo task = {todo} key={index}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo} />
      ))}
      {allCompleted && <p>Good job! Time to lay back and relax!</p>}
    </div>
  )
}

export default ToDoWrapper