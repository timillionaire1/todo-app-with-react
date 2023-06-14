import React from 'react';
import './Todo.css';

function Todo({todo, Remove, status, isActive}) {
     const styles = {
        frame1: {
            display:"flex",
            listStyleType:'none',
            border:'1px solid blue',
            width:'100%',
            borderRadius:'10px',
            justifyContent:"space-between"
        }
    }
    return (
        <>
            {todo?.length > 0 ? (
                <ul>
                    {todo.map((string) => (
                        <div style={{display:'flex'}} >
                            <li style={styles.frame1}><span className={isActive ? "toggle" : "toggle::before"} onClick={status}> COMPLETE</span>{string}</li>
                            <button onClick={Remove}
                            style={{cursor:'pointer'}}>Delete</button>
                        </div>
                    ))}
                </ul>
            ) :(
            <p>Type something</p>
            )}
        </>
    )
}

export default Todo