import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { Todo } from "../../model"
import { MdDone } from "react-icons/md"
import { useEffect, useRef, useState } from "react"

interface Props{
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }) =>{

    const [isEdit, setIsEdit] = useState<boolean>(false),
          [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) =>{
    
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    
    }

    const handleDelete = (id: number) =>{

        setTodos(todos.filter(todo => todo.id !== id))

    }

    const handleEdit = (e: React.FormEvent, id: number) =>{
        
        e.preventDefault()

        setTodos(todos.map(todo => todo.id === id ? {...todo, todo: editTodo} : todo))

        setIsEdit(false)

    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() =>{
    
       inputRef.current?.focus()
    
    }, [isEdit])

    return(

        <form className="todos-single" onSubmit={e => handleEdit(e, todo.id)}>

            {

                isEdit ?(

                    <input 
                        type="text" 
                        value={editTodo} 
                        ref={inputRef}
                        onChange={e => setEditTodo(e.target.value)} 
                        className="edit-input"
                    />

                ) : (

                    todo.isDone ?(

                        <s className="todos-single-text">{todo.todo}</s>
    
                    ):(
    
                        <span className="todos-single-text">{todo.todo}</span>
    
                    )
                )


            }


            <div className="icons">

                <span 
                    className="icon"
                    onClick={() =>{
                        if(!isEdit && !todo.isDone){
                            setIsEdit(!isEdit)
                        }
                    }}
                >

                    <AiFillEdit/>

                </span>


                <span className="icon" onClick={() => handleDelete(todo.id)}>

                    <AiFillDelete/>

                </span>


                <span className="icon" onClick={() => handleDone(todo.id)}>

                    <MdDone/>

                </span>

            </div>

        </form>

    )

}

export default TodoCard