import React from "react";
import "./TodoListTable.styles.css"
import TodoListHeader from "../TodoListHeader/TodoListHeader";
import TodoListInput from "../TodoListInput/TodoListInput";

function TodoListTable(){
    return(
        <div className="mainTable">
            <TodoListHeader></TodoListHeader>
            <TodoListInput></TodoListInput>
        </div>
    );
}

export default TodoListTable;