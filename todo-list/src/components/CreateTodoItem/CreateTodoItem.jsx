import React,{useState} from "react";
import "./CreateTodoItem.styles.css"

function CreateTodoItem({ tasks, setTasks, darkMode }){
    const [taskName, setTaskName] = useState("");

    const onClickHandler=()=>{
        if(taskName === "") return;
        const newTask = {name: taskName, isCompleted: false, id: tasks.length};
        setTaskName("");
        setTasks([newTask,...tasks]);
    }

    const onChangeHandler=(event)=>{
        setTaskName(event.target.value);
    }

    const onKeyDownHandler= (event)=>{
        if(event.key === "Enter")
            onClickHandler();
    }
    return (
        <div className="createTodoField" style={{
            backgroundColor: darkMode ? "hsl(235, 24%, 19%)" : "hsl(236, 33%, 92%)",
        }}>
            <button className="createNewTodoItem" onClick={onClickHandler} style={{
                background: "none"
            }}></button>
            <input type="text" onChange={onChangeHandler} onKeyDown={onKeyDownHandler} value={taskName} placeholder="Create a new todo..." className="inputText" style={{
                backgroundColor: darkMode ? "hsl(235, 24%, 19%)" : "hsl(236, 33%, 92%)",
                color: darkMode ? "hsl(234, 39%, 85%)" : "hsl(235, 21%, 11%)" 
            }}></input>
        </div>
    );
}

export default CreateTodoItem;