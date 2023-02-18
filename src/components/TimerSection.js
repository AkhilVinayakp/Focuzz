import React from "react";
import Count from "./CountDown";

const Timer = ()=>{
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
                    <button className="btn btn-primary text-4xl">START</button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Timer;