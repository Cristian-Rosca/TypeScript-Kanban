import React, { useEffect, useRef, useState } from "react";
import { ToDo } from "../model";
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import "./styles.css"
import { Draggable } from "react-beautiful-dnd";

interface Props {
    toDo : ToDo;
    toDos : ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    index: number;
}



const SingleToDo: React.FC<Props> = ({index, toDo, toDos, setToDos}) => {

    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [editToDo, setEditToDo] = useState<string>(toDo.toDo)

    const handleDelete = (id: number) => {
        setToDos(toDos.filter((toDo) => toDo.id !== id))
    }

    const handleDone = (id: number) => {
        setToDos(toDos.map((toDo) => toDo.id === id? {
            ...toDo, isDone:!toDo.isDone}:toDo))
        }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setToDos(toDos.map((toDo) => (toDo.id === id ? {...toDo, toDo : editToDo}: toDo)))

        setIsEdit(false)
        }
        
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [isEdit])
    

    return (
        <Draggable draggableId={toDo.id.toString()} index={index}>
            {
                (provided) => (
                    <form className="toDos__single" 
                    onSubmit={(e) => handleEdit(e, toDo.id)} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} >
            {
                isEdit? (
                    <input ref={inputRef} value={editToDo} onChange={(e) => setEditToDo(e.target.value)} className='toDos__single--text'/>
                ) : (
                    toDo.isDone? (
                        <s className="toDos__single--text">{toDo.toDo}</s>
                    ) : (
                        <span className="toDos__single--text">{toDo.toDo}</span>
                    ) 
                )
            }
            
            
            <div>
                <span className="icon" onClick={() => { // need to create a callback function here (i.e. onClick={() => {}}
                    if(!isEdit && !toDo.isDone){
                        setIsEdit(!isEdit)
                    }}
                }>
                    <AiFillEdit />
                    </span>
                <span className="icon" onClick={() => handleDelete(toDo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(toDo.id)}>
                    <MdDone/>
                </span>
            </div>

        </form>
                )
            }

            
        </Draggable>
        
    )
}


export default SingleToDo;