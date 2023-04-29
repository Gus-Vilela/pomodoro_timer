import './App.css';

function App() {
  return (
    <div className="App">
      <div className='pomodoro--wrapper'>
        <div className='pomodoro--timer'>
          <div id="timer-label">Session</div>
          <div id="time-left">25:00</div>
          <div className='timer--controls'>
            <button id="start_stop" className='timer--control'>Start/Stop</button>
            <button id="reset" className='timer--control'>Reset</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
