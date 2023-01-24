import React from 'react'

function Todo({todo, Remove}) {
     const frame = {
        listStyleType:'none',
        border:'1px solid blue',
        width:'100%',
        borderRadius:'10px'
    }
    return (
        <>
            {todo?.length > 0 ? (
                <ul>
                    {todo.map((string) => (
                        <div style={{display:'flex'}} >
                            <li style={frame}>{string}</li>
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