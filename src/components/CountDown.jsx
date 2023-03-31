import React from "react";
import { useContext } from "react";
import { timerContext } from "../context/timerContext";

const Count = () =>{
    const {timer_data} = useContext(timerContext);
    console.log("inside the timer", timer_data)
    return(
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-8 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-8xl">
                        <span style={{"--value":timer_data.promoMins}}></span>
                    </span>
                    min
                </div> 
                <div className="flex flex-col p-8 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-8xl">
                        <span style={{"--value":timer_data.promoSec}}></span>
                    </span>
                    sec
                </div>
        </div>
    )


}
export default Count;