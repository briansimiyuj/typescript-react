import { useState } from "react"
import InputField from "./components/InputField"

const Script:React.FC = () =>{

  const [todo, setTodo] = useState<string>('')

  return(

    <div className="container">

      <span className="heading">Taskify</span>

      <InputField/>

    </div>

  )

}

export default Script