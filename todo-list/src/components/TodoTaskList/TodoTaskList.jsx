import React from "react";
import TodoListInput from "../TodoListInput/TodoListInput";
import "./TodoTaskList.styles.css"

function TodoTaskList({ tasks,setTasks,darkMode }){
    return(
        <div className="todoTaskList">
            {tasks.map((task, index)=>{
                return <TodoListInput task={task} tasks={tasks} setTasks={setTasks} darkMode={darkMode} key={index}/>
            })}
        </div>
    )
}

export default TodoTaskList;