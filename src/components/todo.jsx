import React, { useContext, useState, useRef} from "react";
import { timerContext } from "../context/timerContext";
import { REMOVE_TASK, UPDATE_TASK } from "../context/action.types";

const Todo = () =>{
    const {timer_data, dispatch} = useContext(timerContext);
    return (
        <>
            {
                timer_data.tasks.map((task_value,index)=>(          
                    <li className="mb-4 w-[620px] h-16 p-1 flex justify-between items-center" key={index}>
                        <input type="text" placeholder="click to Type" className=" todo-content input w-full max-w-[540px] input-md" value={task_value} onChange={(e)=>update_task(index, e)} readOnly={false}/>
                        <div>
                            <button  className="btn btn-circle  btn-outline" name="close-btn" onClick={()=>deleteTodo(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </li>
                ))
            }
        </>
    )
    /**
     * @description: Remove the task from the state
     * @param: index(int)  - index of the value to be removed
     */
    function deleteTodo(index){
        dispatch({
            type: REMOVE_TASK,
            payload: {
                index
            }
        });
    }
    function update_task(index, e){
        console.log("firing the event :", index, e.target.value);
        dispatch({
            type: UPDATE_TASK,
            payload: {index, value:e.target.value}
        })
    }
}
export default Todo;