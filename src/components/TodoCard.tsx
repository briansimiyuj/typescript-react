import { Todo } from "../../model"

interface Props{
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) =>{

    return(

        <form className="todos-single">

            <span className="todos-single-text">{todo.todo}</span>

        </form>

    )

}

export default TodoCard