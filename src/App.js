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
				<div className='pomodoro--settings'>
					<div className='pomodoro--settings-wrapper'>
						<div id="break-label">Break Length</div>
						<div id='break-length'>5</div>
						<div className='settings--controls'>
							<button id="break-decrement" className='settings--control'>-</button>
							<button id="break-increment" className='settings--control'>+</button>
						</div>
					</div>
					<div className='pomodoro--settings-wrapper'>
						<div id="session-label">Session Length</div>
						<div id='session-length'>25</div>
						<div className='settings--controls'>
							<button id="session-decrement" className='settings--control'>-</button>
							<button id="session-increment" className='settings--control'>+</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
