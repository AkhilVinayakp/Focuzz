import React from "react";

const Count = () =>{
    return(
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-8 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-8xl">
                    <span style={{"--value":24}}></span>
                    </span>
                    min
                </div> 
                <div className="flex flex-col p-8 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-8xl">
                    <span style={{"--value":30}}></span>
                    </span>
                    sec
                </div>
        </div>
    )


}
export default Count;