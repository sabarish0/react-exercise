import React ,{useState} from 'react';

const Todolist = () => {
    const [activity,setActivity]=useState("");
    const [todo,setTodo]=useState([]);
    const addlist=()=>{
        todo.push(activity);
        setTodo(todo);
        console.log(todo);
        setActivity("");
    }
    const deletelist=()=>{
        todo.pop();
        setTodo(todo);
        console.log(todo);
    }
    return(
        <div>
            <input type="text" value={activity} onChange={(e)=>setActivity(e.target.value)} placeholder="Add a Todo List"/><br/>
            <button type="button" onClick={()=>addlist()}>Add Task</button>
            <button type="button" onClick={()=>deletelist()}>Delete Task</button>
            <ul>
                {todo.map((items)=>
                    <li>{items}</li>
                )}
            </ul>
        </div>
    );
}

export default Todolist;
