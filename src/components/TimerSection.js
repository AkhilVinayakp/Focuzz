import React from "react";
import Count from "./CountDown";

const Timer = ()=>{
    return(
        <div>
            <div className="card w-96 bg-base-100 shadow-stone-500 shadow-inner shad">
                <figure className="px-10 pt-10">
                    <Count></Count>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Timer;