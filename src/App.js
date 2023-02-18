import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderSection';
import Timer from './components/TimerSection';
import SideContent from './components/SideContent';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <div>
          <div className='flex justify-center items-center h-screen'>
            <Timer></Timer>
            <SideContent></SideContent>
          </div>
        </div>

      
    </div>
  );
}

export default App;
