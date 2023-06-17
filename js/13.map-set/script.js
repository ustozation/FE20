let user = {
	name: "Alex",
	surname: "Smith",
	age: 34,
}

let shops = [{ pen: 500 }, { book: 1000 }, { phone: 2500 }];

let budget = [1000, 60, 400];

// let map = new Map(Object.entries(user));

// console.log(map);

// console.log(Object.fromEntries(map))

let map = new Map();

shops.forEach((item, i) => {
	map.set(item, budget[i])
})


map.set("1", "str1")
	.set(1, "num1")
	.set(true, "bool1");


// console.log(Object.fromEntries(map))

// for(let value of map.keys()){
// 	console.log(value)
// }

// for(let value of map.values()){
// 	console.log(value)
// }

// for(let value of map.entries()){
// 	console.log(value)
// }

map.forEach(function(value, key,map){
	// console.log(value)
	console.log(key)
})

let set = new Set()

set.add('1')
set.add({name: 'Alex'})
set.add({name: 'John'})

// for(let key of set){
// 	console.log(key)
// }
// set.forEach(function(value, value2, set){
// 	console.log(value, value2)
// })

// console.log(Object.entries(set))
// console.log(set.keys())
// console.log(set.values())
// console.log(set.entries())

// let arr = [1 ,1 ,1 ,2 ,2 ,2 ,3 ,3, 3, 4, 4, 4]

// function removeDuplicate(array){
// 	let newArr = [1]

// 	array.forEach((item, index) => {
// 		if(!newArr.includes(item)){
// 			newArr.push(item)
// 		}
// 	})

// 	console.log(newArr)
// }

// removeDuplicate(arr)