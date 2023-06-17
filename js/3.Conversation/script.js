// number, string, boolean,
// undefined, null, object, bigint, symbol

// let test;
// let und = undefined
// let n = null
// let big = 12n

let teacher = {
	name: 'Ali',
	surname: 'Odiljonov',
	age: 23,
	pet: {
		name: "Bobik"
	}
}

console.log(teacher.name)
console.log(teacher["name"])
console.log(teacher["pet"]["name"])
console.log(teacher.pet.name)


// let colors = [2, 'open', true, null, undefined, {name: 'John'}, [1, 2, 3, 4]]

// console.log(colors[5][1])

// let students = ["Jonibek", "Shaxzod", "Bobur"]

// let students = [{name: 'Jonibek', age: 18}, {name: "Alex", age: 23}]



let num = 12

// Number to String

// console.log(typeof num)

// let result = num.toString()
// let result = String(num)
// let result = num + ''

// console.log(typeof result)

// String to Number
// unary, binary, ternary

// Matematik operator + - * / ** %
let str = '12'

// let result = +str
// let result = Number(str)
// string + number = string 
// string - number = number
// string / number = number
// string * number = number

let result = str - 0
let result1 = str * 1
let result2 = str / 1

// Binary +
// console.log(5 + 7) 

// Unary + 
// console.log(+5)
// console.log(+str + str2)
// console.log(-7 - -6)

// Ternary ? :

// Boolean to Number

let bool = true
let result5 = +bool
let result6 = Number(bool)

// Boolean to String
let bool2 = false
let result7 = String(bool2)

// String to Boolean va Number to Boolean

// false
// ''
// 0
// -0
// null 
// undefined
// NaN

// console.log(Boolean(0))

// NaN = Not a Number 
let string = 'a'
let string2 = 'ererwer'

let result10 = Number(string)

// console.log(5 == 5)
// console.log(NaN == NaN) 