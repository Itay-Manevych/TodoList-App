import React from "react";
import "./TodoListCheckbox.styles.css"
import tickMark from "../../assests/icon-check.svg"

function TodoListCheckbox({isCompleted, setIsCompleted}){
    return (
        <div>
            <button style={{
                backgroundImage: isCompleted ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))" : "background-image: none",
                borderStyle : isCompleted ? "none" : "solid"
            }} className="checkbox">
                {isCompleted && <img src={tickMark}/>}
            </button>
        </div>
    );
}

export default TodoListCheckbox;
