// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './component/Input';
import Todo from './component/Todo';

function App() {
  const [input, setInput]  = useState("");
  const [todo, setTodo]  = useState([]);
  const [isActive, setIsActive]  = useState(false);
  const handleClick = () => {
    if (input !== ""){
      setTodo([...todo, input]);
      setInput("");
    }
  }
  const Remove = (e) =>{
    e.target.parentNode.remove();
  }
  const status = (e) =>{
    // e.target.classList.toggle("toggle::before");
    setIsActive(!isActive);
  }
  return (
    <div className="App">
      <Input input={input} setInput={setInput} handleClick={handleClick}/> 
      <Todo todo={todo} Remove={Remove} status={status} isActive={isActive} />
    </div>
  );
}

export default App;
