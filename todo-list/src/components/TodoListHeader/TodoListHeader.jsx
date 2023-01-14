import React from "react";
import "./TodoListHeader.styles.css";
import sunIcon from "../../assests/icon-sun.svg"
import moonIcon from "../../assests/icon-moon.svg"

function TodoListHeader({darkMode, setDarkMode}){

    const onClickHandler=()=>{
        setDarkMode(!darkMode);
    }

    return(
        <div className="tableHeader">
        <p className="headerText">TODO</p>   
            <img className="imgHeader" src={darkMode ? sunIcon : moonIcon} onClick={onClickHandler}/>
        </div>
    );
}

export default TodoListHeader;