import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { ToDo } from "../model";
import SingleToDo from "./SingleToDo";
import "./styles.css"


interface Props {
    toDos : ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    completedToDos: ToDo[];
    setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    
}

const ToDoList: React.FC<Props> = ({toDos, setToDos, completedToDos, setCompletedToDos}) => {
    return (
        <div className="container"> 
            <Droppable droppableId="toDosList">
                {
                    (provided) => (
                        <div className="toDos" ref={provided.innerRef} {...provided.droppableProps}>
                <span className="toDos__heading">
                    Active Tasks
                </span>
                {
                    toDos.map((toDo, index) => (
                        <SingleToDo
                            index={index}
                            toDo={toDo}
                            toDos={toDos}
                            key={toDo.id}
                            setToDos={setToDos}/>
                    ))
                }
                {provided.placeholder}
            </div>
                    )
                }
            
            </Droppable>
            <Droppable droppableId="toDosRemove">
                {
                    (provided) => (
            <div className="toDos remove" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="toDos__heading">
                    Completed Tasks
                </span>
                {
                    completedToDos.map((toDo, index) => (
                        <SingleToDo
                            index={index}
                            toDo={toDo}
                            toDos={completedToDos}
                            key={toDo.id}
                            setToDos={setCompletedToDos}/>
                    ))
                }
                {provided.placeholder}
            </div>
                    )
                }
            </Droppable>
            
        </div>
    )
}

export default ToDoList;