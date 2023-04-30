import './App.css';
import {useState} from 'react';

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [myInterval, setMyInterval] = useState(null);
	const [breakLength, setBreakLength] = useState(5);
	const [sessionLength, setSessionLength] = useState(25);
	const [timer, setTimer] = useState(25 * 60)
	const [timerType, setTimerType] = useState('Session');
	
	const handleStartStopClick = () => {
		if(isPlaying === false) 
		{
			setIsPlaying(true);
			let myInterval= setInterval(() => {
				setTimer(prevTimer => {
					if(prevTimer === 0) {
						clearInterval(myInterval);
						setIsPlaying(false);
						return prevTimer;
					}
					return prevTimer - 1;
				});
			}, 1000);
			setMyInterval(myInterval);
		}
		else
		{
			setIsPlaying(false);
			clearInterval(myInterval);
			setMyInterval(null);
		}
	}

	const handleResetButtonClick = () => {
		clearInterval(myInterval);
		setMyInterval(null);
		setIsPlaying(false);
		setTimer(25 * 60);
		setBreakLength(5);
		setSessionLength(25);
		setTimerType('Session');
	}

	const handleSettingsClick = (e) => {
		if (isPlaying === false){
			switch (e.target.id) {
				case 'break-decrement':
					setBreakLength(p => {
						if(p-1 < 1) return p;
						timerType === 'Break' && setTimer((p-1) * 60);
						return p-1;
					});
					break;
				case 'break-increment':
					setBreakLength(p => {
						if(p+1 > 60) return p;
						timerType === 'Break' && setTimer((p+1) * 60);
						return p+1;
					});
					break;
				case 'session-decrement':
					setSessionLength(p => {
						if(p-1 < 1) return p;
						timerType === 'Session' && setTimer((p-1) * 60);
						return p-1;
					});
					break;
				case 'session-increment':
					setSessionLength(p => {
						if(p+1 > 60) return p;
						timerType === 'Session' && setTimer((p+1) * 60);
						return p+1;
					});
					break;
				default:
					break;
			}	
		}
	}

	return (
		<div className="App">
			<div className='pomodoro--wrapper'>
				<div className='pomodoro--timer'>
					<div id="timer-label">{timerType}</div>
					<div id="time-left">{
						`${Math.floor(timer / 60) < 10 ?'0':''}${Math.floor(timer / 60)}:${(timer%60) < 10 ?'0':''}${(timer%60)}`
					}</div>
					<div className='timer--controls'>
						<button id="start_stop" className='timer--control' onClick={handleStartStopClick}>Start/Stop</button>
						<button id="reset" className='timer--control' onClick={handleResetButtonClick}>Reset</button>
					</div>
				</div>
				<div className='pomodoro--settings'>
					<div className='pomodoro--settings-wrapper'>
						<div id="break-label">Break Length</div>
						<div id='break-length'>{breakLength}</div>
						<div className='settings--controls'>
							<button id="break-decrement" className='settings--control' onClick={handleSettingsClick}>-</button>
							<button id="break-increment" className='settings--control' onClick={handleSettingsClick}>+</button>
						</div>
					</div>
					<div className='pomodoro--settings-wrapper'>
						<div id="session-label">Session Length</div>
						<div id='session-length'>{sessionLength}</div>
						<div className='settings--controls'>
							<button id="session-decrement" className='settings--control' onClick={handleSettingsClick}>-</button>
							<button id="session-increment" className='settings--control' onClick={handleSettingsClick}>+</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
