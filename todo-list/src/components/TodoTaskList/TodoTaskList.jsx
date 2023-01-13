import React,{useState} from "react";
import TodoListInput from "../TodoListInput/TodoListInput";

function TodoTaskList(){
    const [tasks, setTasks] = useState([
        {name: "work with alon filler", isCompleted:true, id:0},
        {name: "miguel", isCompleted:false, id:1}
    ]);
    console.log(tasks);
    return(
        <div>
            {tasks.map((task, index)=>{
                return <TodoListInput task={task} tasks={tasks} setTasks={setTasks} key={index}/>
            })}
        </div>
    )
}

export default TodoTaskList;