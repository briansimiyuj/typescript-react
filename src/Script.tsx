import { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "../model"

const Script:React.FC = () =>{

  const [todo, setTodo] = useState<string>(''),
        [todos, setTodos] = useState<Todo[]>([])

  return(

    <div className="container">

      <span className="heading">Taskify</span>

      <InputField todo={todo} setTodo={setTodo}/>

    </div>

  )

}

export default Script