import React from "react";
import { ToDo } from "../model";
import "./styles.css"

interface Props {
    toDos : ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    
}

const ToDoList: React.FC<Props> = ({toDos, setToDos}) => {
    return (
        <div className="todos">
            {toDos.map(todo => (
                <li>{todo.toDo}</li>
            ))}
        </div>
    )
}

export default ToDoList;