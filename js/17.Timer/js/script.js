let deadline = '2023-07-25T18:23:45Z'
let deadline2 = '2023-08-01T12:12:12Z'
let deadline3 = '2023-07-12T03:05:25Z'
let now = new Date()

function getTimerData(dl){
	let t = Date.parse(new Date(dl)) - Date.parse(new Date()),
			days = Math.floor(t / ( 1000 * 60 * 60 * 24 )),
			hours = Math.floor((t / 1000 / 60 / 60) % 24),
			minutes = Math.floor((t / 1000 / 60 ) % 60),
			seconds = Math.floor((t / 1000) % 60)

	if(t < 0){
		t = 0
		days = 0
		hours = 0
		minutes = 0
		seconds = 0
	}

	return {
		t, days, hours, minutes, seconds
	}
}

function startTimer(dl, parentClass){
	let parentEl = document.querySelector(`.${parentClass}`),
		daysEl = parentEl.querySelector('.days'),
		hoursEl = parentEl.querySelector('.hours'),
		minutesEl = parentEl.querySelector('.minutes'),
		secondsEl = parentEl.querySelector('.seconds')

	let timerId = setInterval(updateTimer, 1000)
	
	function updateTimer(){
		let timer = getTimerData(dl)

		daysEl.innerText = addZero(timer.days)
		hoursEl.innerText = addZero(timer.hours)
		minutesEl.innerText = addZero(timer.minutes)
		secondsEl.innerText = addZero(timer.seconds)

		if(timer.t < 0){
			clearInterval(timerId)
		}
	}
	updateTimer()
}

function addZero(num){
	if(num >= 0 && num < 10){
		return `0${num}`
	}else{
		return num
	}
}

startTimer(deadline, 'timer-one')
startTimer(deadline2, 'timer-two')
startTimer(deadline3, 'timer-three')


let inp = document.querySelector('input')
let btn = document.querySelector('button')

// btn.addEventListener('click', () => {
// 	inp.placeholder = 'test'
// })

console.dir(inp)