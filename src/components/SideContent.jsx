/**
 * loading the side content default task view  
 */

import React, { useContext, useState, useRef} from "react";
import { timerContext } from "../context/timerContext";
import { ADD_TASK } from "../context/action.types";
import Todo from "./todo";

const SideContent = () =>{
    const {timer_data, dispatch}  = useContext(timerContext);
    
    return (
        <div>
            {/* {console.log("test for rerending", taskList)} */}
            <div className="main-content flex flex-col ml-12">
                <ul id="todos" className="text-xl max-h-[526px] overflow-y-auto">
                    <Todo></Todo>
                </ul>
                <button id="addTask" className="btn btn-wide btn-outline mt-12" onClick={addTask}>Add Task</button>
            </div> 
        </div>
    )

    /**
     * Function to add task  
     */
    function addTask(){
        dispatch({type: ADD_TASK})
    }
}
export default SideContent;
