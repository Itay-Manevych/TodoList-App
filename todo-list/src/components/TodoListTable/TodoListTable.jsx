import React,{useState} from "react";
import "./TodoListTable.styles.css"
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import TodoListInput from "../TodoListInput/TodoListInput";
import TodoTaskList from "../TodoTaskList/TodoTaskList";
import CreateTodoItem from "../CreateTodoItem/CreateTodoItem";

function TodoListTable({darkMode, setDarkMode}){
    const [tasks, setTasks] = useState([]);

    return(
        <div className="mainTable">
            <TodoListHeader darkMode={darkMode} setDarkMode={setDarkMode} ></TodoListHeader>
            <CreateTodoItem tasks={tasks} setTasks={setTasks} darkMode={darkMode}></CreateTodoItem>
            <TodoTaskList tasks={tasks} setTasks={setTasks} darkMode={darkMode}></TodoTaskList>
        </div>
    );
}

export default TodoListTable;