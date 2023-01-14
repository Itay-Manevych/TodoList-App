import React,{useState, useEffect} from "react";
import "./TodoListInput.styles.css"
import TodoListCheckbox from "../TodoListCheckbox/TodoListCheckbox";

function TodoListInput({task,tasks,setTasks,darkMode}){

    const onInputChangeHandler=(event)=>{
        const updatedTasks = tasks.map((_task)=>{
            if(_task.id !== task.id) return _task
            return { name: event.target.value, isCompleted: task.isCompleted, id:task.id };
        })  
        setTasks(updatedTasks);
    }

    const onCheckboxChangeHandler=()=>{
        const updatedTasks = tasks.map((_task)=>{
            if(_task.id !== task.id) return _task
            return { name: task.name, isCompleted: !task.isCompleted, id:task.id };
        })  
        setTasks(updatedTasks);
    }

    return (
        <div className="inputField" style={{
            backgroundColor: darkMode ? "hsl(235, 24%, 19%)" : "hsl(236, 33%, 92%)"
        }}>
            <TodoListCheckbox isCompleted={task.isCompleted} setIsCompleted={onCheckboxChangeHandler}/>
            <input type="text" onChange={onInputChangeHandler} value={task.name} className="inputText" style={{
                backgroundColor: darkMode ? "hsl(235, 24%, 19%)" : "hsl(236, 33%, 92%)",
                color: darkMode ? "hsl(234, 39%, 85%)" : "hsl(235, 21%, 11%)"
            }}></input>
        </div>
    );
}

export default TodoListInput;