import React from "react";
import TodoListInput from "../TodoListInput/TodoListInput";
import "./TodoTaskList.styles.css"
import List from "../common/List"
function TodoTaskList({ tasks,setTasks,darkMode }){
    return(
        <div className="todoTaskList">
            {tasks.map((task, index)=>{
                return <TodoListInput task={task} tasks={tasks} setTasks={setTasks} darkMode={darkMode} key={index}/>
            })}
        </div>
    )
    // return <List items={tasks} 
    // component={<TodoListInput></TodoListInput>}
    // setTasks={setTasks}
    // darkMode={darkMode}
    // />
}

export default TodoTaskList;