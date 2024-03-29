import React from 'react'

function Input({input, setInput, handleClick}) {
  return (
    <div style={{display:'flex'}}>
        <input type="text" placeholder='Title-Description' size={30} value={input} 
        onChange={(e) => { setInput(e.target.value); } }
        style={{outline:'transparent'}} />
        <button onClick={handleClick} style={{cursor:'pointer'}}>Add</button>
    </div>
  )
}

export default Input;