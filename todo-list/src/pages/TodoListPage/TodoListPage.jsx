import React,{useState} from "react";
import "./TodoListPage.styles.css"
import TodoListTable from "../../components/TodoListTable/TodoListTable";

function TodoListPage(){
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className="background" style={{
        backgroundColor: darkMode ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)",
        backgroundImage: darkMode ? 'url(' + require('../../assests/bg-desktop-dark.jpg') + ')' : 'url(' + require('../../assests/bg-desktop-light.jpg') + ')'  
        }}>
            <TodoListTable darkMode={darkMode} setDarkMode={setDarkMode}></TodoListTable>
        </div>
    );
}


export default TodoListPage;