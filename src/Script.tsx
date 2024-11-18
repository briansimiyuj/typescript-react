import { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "../model"

const Script:React.FC = () =>{

  const [todo, setTodo] = useState<string>(''),
        [todos, setTodos] = useState<Todo[]>([])


  const addTodo = (e: React.FormEvent)=>{
  
    e.preventDefault() 
  
  }

  return(

    <div className="container">

      <span className="heading">Taskify</span>

      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/> 

    </div>

  )

}

export default Script