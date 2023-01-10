import React from "react";
import "./TodoListCheckbox.styles.css"
import tickMark from "../../assests/icon-check.svg"

function TodoListCheckbox(){
    return (
        <div>
            <button style={{
                // backgroundImage: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
                // borderStyle : "none"
            }} className="checkbox">
                {/* {<img src={tickMark}/>} */}
            </button>
        </div>
    );
}

export default TodoListCheckbox;
