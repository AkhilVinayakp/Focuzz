import React, { useContext } from "react";
import Count from "./CountDown";
import { timerContext } from "../context/timerContext";
import { TIMER_RUNSTATUS, UPDATE_MINS, UPDATE_SEC, RESET_SEC } from "../context/action.types";

const Timer = ()=>{
    const {timer_data, dispatch}  = useContext(timerContext);
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

        console.log("starting the timer");
        dispatch({type: TIMER_RUNSTATUS})
        scheduled_timer = setInterval(()=>{
            if(timer_data.promoSec==0){
                dispatch({type:UPDATE_MINS});
                dispatch({type:RESET_SEC});
            }
            else{
                dispatch({type:UPDATE_SEC});
            }
            if(timer_data.promoMins === 0){
                clearInterval(scheduled_timer);
            }
        }, 1000)
    }
}

export default Timer;