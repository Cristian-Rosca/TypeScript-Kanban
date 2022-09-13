import React, { useState } from 'react';
import internal from 'stream';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { ToDo } from './model';



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
  

  return (
    <div className="App">
      <span className="heading">Tasklist</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
      <ToDoList toDos={toDos} setToDos={setToDos} completedToDos={completedToDos} setCompletedToDos={setCompletedToDos} />
    </div>
  );
}

export default App;
