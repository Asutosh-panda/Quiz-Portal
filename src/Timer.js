import React, { useState, useRef, useEffect } from 'react'
import "./Timer.css"

const Timer = () => {

	
	const Ref = useRef(null);
	let time = parseInt(localStorage.getItem("time"));
	const [timer, setTimer] = useState(`00:${time}:00`);


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {

		
		setTimer(`00:${time}:00`);

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();
		deadline.setSeconds(deadline.getSeconds() + 1200);
		return deadline;
	}
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	return (
		<div className="Timer">
			<h2>{timer}</h2>
		</div>
	)
}

export default Timer;
