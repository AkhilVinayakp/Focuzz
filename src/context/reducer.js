import { LOAD_INI, START_TIMER, 
        STOP_TIMER,

} from "./action.types";
import {initialState} from './config';

const reducer = (state, action) => {
    switch(action.type){
        case START_TIMER:
            break;
        case STOP_TIMER:
            break;
        case LOAD_INI:
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
        default:
            return state;
    }
}
export default reducer;