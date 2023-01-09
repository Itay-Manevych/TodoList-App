import React from "react";
import "./TodoListHeader.styles.css";
import sunIcon from "../../assests/icon-sun.svg"

function TodoListHeader(){
    return(
        <div className="tableHeader">
            <p className="headerText">TODO</p>   
            <img className="imgHeader" src={sunIcon}/>
        </div>
    );
}

export default TodoListHeader;