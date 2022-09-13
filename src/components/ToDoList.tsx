import React from "react";
import { ToDo } from "../model";
import SingleToDo from "./SingleToDo";
import "./styles.css"


interface Props {
    toDos : ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    completedToDos: ToDo[];
    setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    
}

const ToDoList: React.FC<Props> = ({toDos, setToDos}) => {
    return (
        <div className="container"> 
            <div className="toDos">
                <span className="toDos__heading">
                    Active Tasks
                </span>
                {
                    toDos.map((toDo) => (
                        <SingleToDo
                            toDo={toDo}
                            toDos={toDos}
                            key={toDo.id}
                            setToDos={setToDos}/>
                    ))
                }
            </div>
            <div className="toDos remove">
            <span className="toDos__heading">
                    Completed Tasks
                </span>
                {
                    toDos.map((toDo) => (
                        <SingleToDo
                            toDo={toDo}
                            toDos={toDos}
                            key={toDo.id}
                            setToDos={setToDos}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ToDoList;