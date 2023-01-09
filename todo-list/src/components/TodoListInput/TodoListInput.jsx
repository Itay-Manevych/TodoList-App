import React from "react";
import "./TodoListInput.styles.css"
import TodoListCheckbox from "../TodoListCheckbox/TodoListCheckbox";

function TodoListInput(){
    return (
        <div className="inputField">
            <TodoListCheckbox/>
            <p className="inputText">Create a new todo...</p>
        </div>
    );
}

export default TodoListInput;