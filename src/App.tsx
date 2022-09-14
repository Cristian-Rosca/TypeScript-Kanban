import React, { useState } from 'react';
import internal from 'stream';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { ToDo } from './model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';



const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>(" ");
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (toDo) {
      setToDos([...toDos, {id: Date.now(), toDo, isDone: false} ])
      setToDo("");
    }
  };

  console.log('your toDos: ', toDos);
  
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    console.log(result);


    // base cases
    if(!destination) {
      return 
    }

    if(destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    let add, 
      active = toDos,
      complete = completedToDos

      if(source.droppableId==='toDosList'){
        add=active[source.index];
        active.splice(source.index, 1)
      }
      else {
        add = complete[source.index];
        complete.splice(source.index, 1)
      }

      if(destination.droppableId==='toDosList'){
        active.splice(destination.index, 0, add)
      }
      else {
        complete.splice(destination.index, 0, add)
      }

      setCompletedToDos(complete);
      setToDos(active)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
      <span className="heading">Tasklist</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
      <ToDoList toDos={toDos} setToDos={setToDos} completedToDos={completedToDos} setCompletedToDos={setCompletedToDos} />
    </div>
    </DragDropContext>
    
  );
}

export default App;
