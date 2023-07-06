// Asinxron

// let count = 0

// let interId = setInterval(function(){
// 	console.log('setinterval')
// 	count++
// 	if(count === 5){
// 		clearInterval(interId)
// 	}
// }, 1000)

// setTimeout(function(){
// 	console.log('setTimeout')
// }, 1000)


// Date

// let now = new Date(952246854000)
// let now = new Date(2001, 11, 3, 18, 13, 56)

// let now = new Date('2001-05-03T18:30:25')
// let milliseconds = Date.parse(now)

// console.log(now)
// console.log(now.setFullYear(2002))
// console.log(now.setMonth(14))
// console.log(now.getFullYear())
// console.log(now.getMonth())
// // console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getTime())
// console.log(now.getTimezoneOffset())
// console.log(now.getHours())
// console.log(now.getUTCHours())

let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')

updateTime()
setInterval(updateTime, 1000)

function updateTime(){
	let now = new Date()

	hour.innerText = addZero(now.getHours())
	minute.innerText = addZero(now.getMinutes())
	second.innerText = addZero(now.getSeconds())
}

function addZero(num){
	if(num >= 0 && num < 10){
		return `0${num}`
	}else{
		return num
	}
}



console.dir()