function sayHi(){
	console.log("hello")
	showMessage()
}

function showMessage(){
	console.log("Open Web")
	sayBye()
}

function sayBye(){
	console.log("bye")
}

sayHi()

// sayBye - 1
// sayHi - 2

// function calc(x, y){
// 	return x + y
// }

// function calc(x){
// 	return x + Math.floor(Math.random() * 10)
// }

// let z = 7

// function getNumber(){
// 	return Math.floor(Math.random() * 10)
// }

// function calc(x, y){
// 	return x + y + getNumber()
// }

// console.log(calc(5, 6))
// console.log(calc(5, 6))

function pow(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * pow(n - 1);
  }
}

console.log(pow(5)) // 


// function factorial(n){
// 	//code
// }



function dropCap(n) {
	let arr = n.split(' ')
	let newArr = [ ]
	for(let i = 0 ;  i < arr.length ; i++){
		if(arr[i] === ''){
			newArr.push('')
		}
		else if(arr[i] === 'of'){
			newArr.push('of')
		}
		else{
			let capitalized = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
			newArr.push(capitalized)
		}
	}
	return newArr.join(' ')
}
console.log(dropCap('  leading of spAces'))

function scrollingText(text){
let arr = [text]
let str = text
for(let i = 0 ; i < text.length-1 ; i++ ){
	str = str.slice(1) + str[0]
	arr.push(str.toUpperCase())
}
return arr
}
console.log(scrollingText('CODEWARS'));
