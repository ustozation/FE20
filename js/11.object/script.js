// let user = {
// 	name: "Alex",
// 	surname: "Smith",
// 	age: 45,
// 	pet: {
// 		title: "Bobik"
// 	}
// }

// let obj = Object.assign({}, user)
// obj.pet.title = "Tuzik"

// console.log("obj: ", obj)
// console.log("user: ", user)


// for(let key in user){
	// 	obj[key] = user[key]
// }
	
// let obj = {...user}

// let num = 5
// let num1 = num


// console.log(user["name"])
// console.log("name" in user)
// console.log(user.age)

// for(let key in user){
// 	console.log(key)
// 	console.log(user[key])
// }
// let arr = [1, 2, 3, 4, 5, 6]

// for(let key in arr){
// 	console.log(arr[key])
// }

// for(let a of arr){
// 	console.log(a)
// }


let person = {
	attack: 199,
	armor: 50,
	speed: 500,
	intelect: 100,
	strength: 100
}
let arr = [['attack', 199], ['armor', 50]]
// console.log(Object.values(person))
// console.log(Object.keys(person))
// console.log(Object.entries(person))
// console.log(Object.fromEntries(arr))

// let axe = {
// 	name: "Axe",
// 	strength: 200
// }
// axe.__proto__ = person
// let axe = Object.create(person, {})
// axe.name = "Axe"

// let axe = Object.setPrototypeOf({
// 	name: "Axe",
// 	description: "Axe lorem ipsum"
// }, person)

// console.log(axe)
// console.log(axe.speed)


