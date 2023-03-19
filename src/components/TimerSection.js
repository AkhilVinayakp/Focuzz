import React, { useContext, useEffect, useState } from "react";
import Count from "./CountDown";
import { timerContext } from "../context/timerContext";
import { TIMER_RUNSTATUS, UPDATE_MINS, UPDATE_SEC, RESET_SEC, UPDATETIMERSELECTION } from "../context/action.types";

const Timer = ()=>{
    const {timer_data, dispatch}  = useContext(timerContext);
    const [intervelID, setIntervalID] = useState(null);
    // Testing for toggling the tab selection.
    const [tabSelection, setTabselection] = useState(0)
    const view_options = ["Promodoro", "Short Break", "Long Break"];
    const opt_style_default = "promotab tab tab-lg tab-lifted"
    const opt_style_selected = "promotab tab tab-lg tab-lifted tab-active"
    let scheduled_timer;
    return(
        <div>
            <div className="card w-auto bg-base-100 shadow-stone-500 shadow-inner">
                <div className="px-3 tabs w-full">
                    {
                        view_options.map((option, index)=>(
                            <a  className={tabSelection== index ? opt_style_selected : opt_style_default} key={index} onClick={event=>changeTimerSelection(index, option)} value={option}>{option}</a>
                        ))
                    }
                </div>
                <figure className="px-10 pt-10">
                    <Count></Count>
                </figure>
                <div className="card-body items-center text-center">
                    <div className="card-actions">
                        <button className="btn btn-primary text-4xl" onClick={startTimer}>{timer_data.isRunning==false ? "START" : "STOP"}</button>
                    </div>
                </div>
            </div>
        </div>
    )

    function startTimer(){

        dispatch({type: TIMER_RUNSTATUS})
        if(timer_data.isRunning){
            clearInterval(intervelID);
            return;
        }
        let timer_sec = timer_data.promoSec;
        let timer_min = timer_data.promoMins;
        // ! why the timer data not getting updated according to the change
        console.log("timer data :", timer_data);
        scheduled_timer = setInterval(()=>{
            console.log("promosec data:", timer_data.promoSec)
            console.log("control variables :", timer_min, timer_sec);
            if(timer_sec==0){
                console.log("resenting the sec and updating mins");
                timer_min -= 1;
                timer_sec = 59;
                dispatch({type:UPDATE_MINS});
                dispatch({type:RESET_SEC});
            }
            else if(timer_sec >= 0){
                timer_sec -= 1;
                dispatch({type:UPDATE_SEC});
                console.log("decrease sec.")
            }
            if(timer_min === 0 && timer_sec <= 0){
                clearInterval(scheduled_timer);
                dispatch({type:RESET_SEC})
                dispatch({type: TIMER_RUNSTATUS})
                // alert with a sound and switch it back to short break and start

            }
        }, 1000)
        setIntervalID(scheduled_timer);
    }
    function changeTimerSelection(selection_index, selection_value){
        if(timer_data.isRunning){
            alert("You are about to switch the timer while it is running. Are you sure")
            clearInterval(intervelID);
            dispatch({type: TIMER_RUNSTATUS})
        }
        setTabselection(selection_index);
        console.log("Swtiching to the selection", selection_index, selection_value);
        
    // dispatching the methods to update the  timer section.
    // TODO: clear the currnent timer before moving forward.
        dispatch({
            type: UPDATETIMERSELECTION,
            payload: {
                selection_index,
                selection_value
            }
        })

    }


}

export default Timer;