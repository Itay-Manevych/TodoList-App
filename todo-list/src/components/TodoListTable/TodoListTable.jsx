import React from "react";
import "./TodoListTable.styles.css"
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import TodoListInput from "../TodoListInput/TodoListInput";
import TodoTaskList from "../TodoTaskList/TodoTaskList";

function TodoListTable(){
    return(
        <div className="mainTable">
            <TodoListHeader></TodoListHeader>
            <TodoTaskList></TodoTaskList>
        </div>
    );
}

export default TodoListTable;