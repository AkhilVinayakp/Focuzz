/**
 * loading the side content default task view  
 */

import React, { useContext, useState, useRef} from "react";
import { timerContext } from "../context/timerContext";
import { ADD_TASK } from "../context/action.types";

const SideContent = () =>{
    const {timer_data, dispatch}  = useContext(timerContext);
    
    return (
        <div>
            {/* {console.log("test for rerending", taskList)} */}
            <div className="main-content flex flex-col ml-12">
                <ul id="todos" className="text-xl max-h-[526px] overflow-y-auto">
               
      {
        
        timer_data.tasks.map((task_value,index)=>(          
            <li className="mb-4 w-[620px] h-16 p-1 flex justify-between items-center" key={index}>
            <input type="text" placeholder="click to Type" className=" todo-content input w-full max-w-[540px] input-md" value={task_value} />
            <div>
              <button  className="btn btn-circle  btn-outline" name="close-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            </li>
        ))
      }
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
