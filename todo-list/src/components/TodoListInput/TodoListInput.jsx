import React,{useState, useEffect} from "react";
import "./TodoListInput.styles.css"
import TodoListCheckbox from "../TodoListCheckbox/TodoListCheckbox";

function TodoListInput({task,tasks,setTasks}){
    const [taskName, setTaskName] = useState(task.name);
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    useEffect(()=>{
        const updatedTasks = tasks.filter((task_)=>task_.id === task.id).push({name: taskName, isCompleted: isCompleted, id:task.id})    
        setTasks(updatedTasks);
    },[taskName,isCompleted])

    const onChangeHandler=(event)=>{
        setTaskName(event.target.value);
    }

    const onClickHandler=(event)=>{
        setIsCompleted(true);
    }

    return (
        <div className="inputField">
            <TodoListCheckbox isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
            <input type="text" onChange={onChangeHandler} onClick={onClickHandler} placeholder="Create a todo..." className="inputText"></input>
        </div>
    );
}

export default TodoListInput;