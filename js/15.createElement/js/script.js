// let btn = document.querySelector('button')
// let counterEl = document.querySelector('.counter')

// let counter = 0

// function addCounter() {
// 	if(counter < 5){
// 		counter++
// 		counterEl.textContent = counter
// 	}
// }

// btn.addEventListener('click', addCounter)

// if(counter > 5){
// 	btn.removeEventListener('click', addCounter)
// }

// let wrapper = document.querySelector('.wrapper')
// let container = document.querySelector('.container')
// let inner = document.querySelector('.inner')

// inner.addEventListener('click',() => {
// 	console.log('done')
// })

// wrapper.addEventListener('click', (event) => {
// 	// if(event.target.classList.contains('wrapper')){
// 	// 	event.target.classList.add('bg-color')
// 	// }
// 	event.currentTarget.classList.add('bg-color')
// 	// console.dir()
// })

let wrapper = document.createElement('div')

wrapper.classList.add('wrapper')
wrapper.id = 'wrapper-id'
wrapper.setAttribute('start', 234)

wrapper.style.width = '200px'
wrapper.style.height = '200px'
wrapper.style.backgroundColor = 'red'
document.body.prepend(wrapper)

let inner = document.createElement('div')

inner.style.cssText = `
	background-color: red;

`
inner.style.width = '100px'
inner.style.height = '100px'
inner.style.backgroundColor = 'yellow'

wrapper.insertAdjacentElement('beforeend', inner)
// insertAdjacentText
// insertAdjacentElement

// let container = document.createElement('div')

// container.style.width = '25px'
// container.style.height = '25px'
// container.style.backgroundColor = 'blue'

// inner.append(container)







// let container2 = document.createElement('div')

// container2.style.width = '25px'
// container2.style.height = '25px'
// container2.style.backgroundColor = 'pink'

// inner.append(container2)


// let container3 = document.createElement('div')

// container3.style.width = '25px'
// container3.style.height = '25px'
// container3.style.backgroundColor = 'brown'

// container.after(container3)

// container.remove()
// container.replaceWith(container3)
// console.dir(container)
