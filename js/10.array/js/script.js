// pop shift unshift join split map
// let comboArr = [ 1 , 3 , 5 , 'hello' , 'world', 'web'  , 1 , 'Str' , [] , null  ]


// function showArr(arr){
// 	arr.map((item)=>{
// 		console.log(item);
// 	})
// }
// let str ='Open Web Academy'

// function getVowels(string){
// 	let arr = string.toUpperCase().split('')
// 	let vovelArr =[]
// 	arr.map((item)=>{
// 		if(item === 'A' || item === 'E'  || item === 'I' || item === 'O' || item === 'U'){
// 			vovelArr.push(item)
// 			console.log(true);
// 		}
// 		else{
// 			console.log(false);
// 		}

// 	})
// 	console.log(vovelArr.join('-'));
// }
// getVowels(str)
// showArr()




// let [a, b, c, d] = array

// console.log(str1.slice())
// console.log(array[3].slice())

// let person = {
// 	name: "Alex",
// 	age: 56,
// 	pet: {
// 		name: "Tuzik"
// 	}
// }

// let {
// 	name,
// 	age,
// 	pet: {
// 		name: firstname,
// 	}
// } = person

// console.log(person.name, person.age)

// let array = [1, 2, "Open web", "Frontend"]
// let str8 = "Hello world" 

// let arrNumbers = [2, 3, 4, 5, 6, 7, 8]

// function showMessage(...smth){
// 	console.log(smth)
// }

// showMessage(...arrNumbers)

// console.log(Math.min(...arrNumbers))




// array.forEach(function(item, index, arr) {
// 	// console.log(item)
// 	// console.log(index)
	
// })
// let strs = ["Alex", "John", "Ibrohim", "Ozodbek"]
// let newArr = strs.map(function(item, index, arr) {
// 	if(item.length < 5){
// 		return item
// 	}
// })

// let newArr = strs.filter(function (item, index, arr){
// 	return item.length < 5
// })



// let strs = ["Alex", "John", "Ibrohim", "Ozodbek"]

// let newArr = strs.reduceRight(function(prev, current, index, arr) {
// 	return prev + current
// }, "owa")
// let array = [1, 2, 3, 4, 5, 6]

// let some = array.some(function(item, i, arr){
// 	return item % 2 === 0
// })

// let every = array.every(function(item, i, arr){
// 	return item % 2 === 0
// })


// console.log("some: ", some)
// console.log("every: ", every)


let strs = ["Alex", "John", "Ibrohim", "Ozodbek"]
let array = [1, 102, 34, 76, 11, 22, 3]

// let usersData = [
// 	{
// 		name: "Alex",
// 		age: 23
// 	},
// 	{
// 		name: "John",
// 		age: 16
// 	},
// 	{
// 		name: "Barry",
// 		age: 78
// 	}
// ]

// usersData.sort(function(a, b){
// 	return a.age - b.age
// })

// console.log(usersData)