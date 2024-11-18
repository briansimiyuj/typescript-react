interface Props{

    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addTodo: (e: React.FormEvent<HTMLFormElement>) => void;

}

const InputField: React.FC<Props> = ({ todo, setTodo, addTodo }) =>{

    return(

        <form onSubmit={addTodo}>

            <input 
                type="input" 
                placeholder="Enter a task" 
                className="input-box"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />

            <button className="input-submit" type="submit">Go</button>

        </form>

    )

}

export default InputField