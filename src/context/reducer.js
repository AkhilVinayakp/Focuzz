import { LOAD_INI, 
        RESET_SEC, 
        STOP_TIMER,
        TIMER_RUNSTATUS,
        UPDATE_MINS,
        UPDATE_SEC,
        UPDATETIMERSELECTION

} from "./action.types";
import {initialState} from './config';

const reducer = (state, action) => {
    switch(action.type){
        case UPDATE_MINS:
            return {...state, promoMins: state.promoMins-1};
        case UPDATE_SEC:
            return {...state, promoSec: state.promoSec-1};
        case RESET_SEC:
            if(state.promoMins==0){
                return {...state, promoSec: 0};   
            }
            return {...state, promoSec: 59};
        case STOP_TIMER:
            break;
        case TIMER_RUNSTATUS:
            return {...state, "isRunning": !state.isRunning}
        case LOAD_INI:
            console.log("loading initial value")
            let timer_data = localStorage.getItem("timer_initial_data");
            if(timer_data){
                timer_data = JSON.parse(timer_data);
                return timer_data;
            }
            else{
                // load from the sample data listed.
                return initialState.inital_data;
            }
            break;
        case UPDATETIMERSELECTION:
            const selection_index = action.payload.selection_index;
            let selection_value = action.payload.selection_value;
            if(selection_index===0){
                return {...state, promoMins: initialState.inital_data.promoMins, promoSec: initialState.inital_data.promoSec}
            }
            selection_value = selection_value.trim();
            return {
                        ...state, 
                        promoMins: initialState.inital_data.config[selection_value].promoMins,
                        promoSec: initialState.inital_data.config[selection_value].promoSec,
                    }


        default:
            return state;
    }
}
export default reducer;