import React from "react";
import "./TodoListCheckbox.styles.css"
import tickMark from "../../assests/icon-check.svg"

function TodoListCheckbox({isCompleted, setIsCompleted}){
    
    return (
        <div>
            <button onClick={setIsCompleted} style={{
                backgroundImage: isCompleted ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))" : "none",
                borderStyle : isCompleted ? "none" : "solid",
                background: "none"
            }} className="checkbox">
                {isCompleted && <img src={tickMark}/>}
            </button>
        </div>
    );
}

export default TodoListCheckbox;
