import React from "react";
import "./TodoListInput.styles.css"
import TodoListCheckbox from "../TodoListCheckbox/TodoListCheckbox";

function TodoListInput(){
    return (
        <div className="inputField">
            <TodoListCheckbox/>
            <input type="text" placeholder="Create a todo..." className="inputText"></input>
        </div>
    );
}

export default TodoListInput;