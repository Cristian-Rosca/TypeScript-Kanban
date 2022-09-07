import React, { useState } from 'react';
import internal from 'stream';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './model';



const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>(" ");
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  console.log(toDo);
  

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo}/>
    </div>
  );
}

export default App;
