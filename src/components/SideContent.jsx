/**
 * loading the side content default task view  
 */

import React from "react";
import Todo from "./Todo";

const SideContent = () =>{
    return (
        <div>
            <div className="main-content flex flex-col ml-12">
                <ul id="todos" className="text-xl max-h-[526px] overflow-y-auto">
                    <Todo></Todo>
                </ul>
                <button id="addTask" className="btn btn-wide btn-outline mt-12">Add Task</button>
            </div> 
        </div>
    )
}
export default SideContent;