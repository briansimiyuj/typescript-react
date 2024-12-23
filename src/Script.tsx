import { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "../model"
import TodoList from "./components/TodoList"

const Script:React.FC = () =>{

  const [todo, setTodo] = useState<string>(''),
        [todos, setTodos] = useState<Todo[]>([])


  const addTodo = (e: React.FormEvent)=>{
  
    e.preventDefault() 

    if(todo){

      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      
      setTodo('')
    }
  
  }

  return(

    <div className="container">

      <span className="heading">Taskify</span>

      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/> 

      <TodoList todos={todos} setTodos={setTodos}/>

    </div>

  )

}

export default Script