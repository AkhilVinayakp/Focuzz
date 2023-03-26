import React, { useContext, useEffect, useState } from "react";
import Count from "./CountDown";
import { timerContext } from "../context/timerContext";
import { TIMER_RUNSTATUS, UPDATE_MINS, UPDATE_SEC, RESET_SEC, UPDATETIMERSELECTION, RESET_TIMER } from "../context/action.types";
import { playSwitchTone } from "../services/audioHandler";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
            if(timer_sec==0 && timer_min !=0){
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
                dispatch({type:RESET_TIMER})
                dispatch({type: TIMER_RUNSTATUS})
                switchTab();
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
    /************************************  
     * @description: funtion used to switch the tab automatially,
     * from the given to the desired one set by the user
     * example. switching from promoSec -> short break
     *                  short break -> promosec
     * corresponding break option set by the user, in the config file.
     ************************************/
    function switchTab(){
        playSwitchTone();
        const resolveSwitching = new Promise(resolve=>{
            setTimeout(resolve, 1000);
            let current_tab = timer_data.config.current_selection_id;
            if(current_tab === 0){
                // switching from the promoTimer to desired break timer.
                const break_option = timer_data.config.break_option_id;
                changeTimerSelection(break_option, timer_data.config.view_options[break_option])
                console.log("switching to the option automatically :", break_option)
            }
        })
        toast.promise(resolveSwitching,{
            pending: "Switching ⏲️",
            success: "Starting the timer ⏳",
            error: "ohhh something gone wrong 🥵"
        });
    }
}

export default Timer;