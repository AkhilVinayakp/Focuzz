import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderSection';
import Timer from './components/TimerSection';
import SideContent from './components/SideContent';
import Splash from './components/Splash';
import {timerContext} from './context/timerContext';
import timerReducer from './context/reducer';
import {useReducer, useEffect} from 'react';
import {LOAD_INI} from './context/action.types';

function App() {
  const [timer_data, dispatch] = useReducer(timerReducer, {});
  /************************************  
   * @description: Loading initial Data
   ************************************/
  useEffect(()=>{
    dispatch({
      type: LOAD_INI
    })
  },[]);
  return (
    <timerContext.Provider value={{timer_data, dispatch}}>
      <div className="App">
            {/* <Splash></Splash> */}
            <Header></Header>
              <div>
                <div className='flex justify-center mt-32 gap-32'>
                  <div>
                      <Timer></Timer>
                  </div>
                  <div>
                    <SideContent></SideContent>
                  </div>
                </div>
              </div>
          </div>
    </timerContext.Provider>
  );
}

export default App;
