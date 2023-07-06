// let openBtn = document.querySelector('[data-btn]')
// let closeBtn = document.querySelector('.remove')

// let modal = document.querySelector('.modal')

// openBtn.addEventListener('click' , ()=>{
// 	modal.classList.toggle('active')
// })
// closeBtn.addEventListener('click' , ()=>{
// 	modal.classList.remove('active')
// })



// let nameInp = document.querySelector('#name')
// let pswrdInp = document.querySelector('#password')
// let submitBtn = document.querySelector('.submit')

// let userObj = {

// }
// submitBtn.addEventListener('click',()=>{
// 	if(pswrdInp.value !==  '' && nameInp.value !== ''){
// 		userObj.name = nameInp.value
// 		userObj.password = pswrdInp.value
// 		modal.classList.remove('active')	
// 		console.log(userObj);
// 	}
// 	else{
// 		pswrdInp.style.borderColor = 'red'
// 		nameInp.style.borderColor = 'red'
// 	}
// 	// 
// 	// pswrdInp.value = ''
// 	// 
// })

// let nameInp = document.querySelector('#name')
// let count = 0
// nameInp.addEventListener('input' ,(event)=>{
// 	count++
// 	let arr = nameInp.value.split(' ').join('')
// 	if(arr.length % 4 ==0){
// 			nameInp.value+=' '
// 	}
// })

// let obj = {
// 	cardHolderName :'' , 
// 	cardNumber : 8600,
// 	expDat : '09/24',
// 	cvc : 456
// }

let inp = document.querySelector('input[type="text"]')
let checkbox = document.querySelector('input[type="checkbox"]')

// inp.addEventListener('input', (e) => {
// 	let target = e.target
// 	if(target.value.length > 5){
// 		target.value = target.value.slice(0, 5)
// 	}
// })

checkbox.addEventListener('change', (e) => {
	console.dir(checkbox.checked)
})