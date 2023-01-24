// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './component/Input';
import Todo from './component/Todo';

function App() {
  const [input, setInput]  = useState("");
  const [todo, setTodo]  = useState([]);
  const handleClick = () => {
    if (input !== ""){
      setTodo([...todo, input]);
      setInput("");
    }
  }
  const Remove = (e) =>{
    e.target.parentNode.remove();
  }
  return (
    <div className="App">
      <Input input={input} setInput={setInput} handleClick={handleClick}/> 
      <Todo todo={todo} Remove={Remove}  />
    </div>
  );
}

export default App;
