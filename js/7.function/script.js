// DRY


// function declaration



function sum(x, y){
	if(typeof x !== "number" || typeof y !== "number"){
		console.log('Xatolik yuz berdi son kiriting!')
	}else{
		console.log(x + y)
	}
}

// sum(25, 25)


// function sumArrayNumbers(array){
// 	let sum = 0

// 	for(let i = 0; i < array.length; i++){
// 		sum += array[i]
// 	}

// 	console.log(sum)
// }

// let arr = [1, 2, 3, 4, 5, 6]
// let arr2 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12]

// sumArrayNumbers(arr)
// sumArrayNumbers(arr2)

// function getStudentInfo(name="No name", surname="No surname"){
// 	console.log(name + " " + surname)
// }

// getStudentInfo("Test")

function getUserInfo(name = "", surname = "", age = ""){
	return {
		name: name,
		surname: surname,
		age: age
	}
}

let user1 = getUserInfo("Alex", "Smith", 23)

// console.log(user1)

let user2 = getUserInfo("John", "Allen", 45)

// console.log(user2)

// console.log(userData)

// let num = 7

// function showMessage(){
// 	num = 6
// 	console.log(num)
// }

// showMessage()
// console.log(num)



// function declaration

showMessage()

function showMessage(){
	console.log('Hello Declaration')
}


//function expression

let showMessageExp = function(arg1, arg2 = ''){
	console.log('Hello Expression')
}

showMessageExp()

// arrow function

let showMessageArrow = (arg1, arg2 = '') => {
	console.log('Hello Arrow Function')
}

showMessageArrow()
//Homework #1
let arr = [1, 2, 3, 4, 5, 6, 7]
function calcAverage(numbers){
	// numbers.length
}

calcAverage(arr) // 3.5
//Homework #2
function isPalindrom(string){

}
isPalindrom('some') // false
isPalindrom("abba") // true
//Homework #3
function countVowels(str){
	// code
}

countVowels('open web') // 3