import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderSection';
import Timer from './components/TimerSection';
import SideContent from './components/SideContent';
import Splash from './components/Splash';

function App() {
  return (
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
  );
}

export default App;
