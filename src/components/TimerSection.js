import React, { useContext, useState } from "react";
import Count from "./CountDown";
import { timerContext } from "../context/timerContext";
import { TIMER_RUNSTATUS, UPDATE_MINS, UPDATE_SEC, RESET_SEC } from "../context/action.types";

const Timer = ()=>{
    const {timer_data, dispatch}  = useContext(timerContext);
    const [intervelID, setIntervalID] = useState(null);
    let scheduled_timer;
    return(
        <div>
            <div className="card w-auto bg-base-100 shadow-stone-500 shadow-inner">
                <div className="px-3 tabs w-full">
                    <a className="tab  tab-lg tab-lifted tab-active">Promodoro</a> 
                    <a className="tab tab-lg tab-lifted">Short Break</a> 
                    <a className="tab tab-lg tab-lifted">Long Break</a>
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
            else{
                timer_sec -= 1;
                dispatch({type:UPDATE_SEC});
                console.log("decrease sec.")
            }
            if(timer_min== 0){
                clearInterval(scheduled_timer);
                dispatch({type:RESET_SEC})
                dispatch({type: TIMER_RUNSTATUS})
            }
        }, 1000)
        setIntervalID(scheduled_timer);
    }
}

export default Timer;