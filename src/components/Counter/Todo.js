import { memo } from "react";

const Todo = (props) => {
    console.log('todo')

    return(
        <>
            {
                props.todos.map((todo,index)=>{
                    return <h2 key={index}>{todo}</h2>
                })
            }

            <button onClick={props.addTodos}>Add Todo</button>
        </>
    )
}

export default memo(Todo);