import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { Todo } from "../../model"
import { MdDone } from "react-icons/md"

interface Props{
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) =>{

    return(

        <form className="todos-single">

            <span className="todos-single-text">{todo.todo}</span>


            <div className="icons">

                <span className="icon">

                    <AiFillEdit/>

                </span>


                <span className="icon">

                    <AiFillDelete/>

                </span>


                <span className="icon">

                    <MdDone/>

                </span>

            </div>

        </form>

    )

}

export default TodoCard