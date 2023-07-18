
let { form } = document.forms
let inpName = document.querySelector('#name')
let inpEmail = document.querySelector('#email')
let inpPhone = document.querySelector('#phone')

let nameStatus = false, 
	emailStatus = false, 
	phoneStatus = false

let maskOptions = {
  mask: '+{998}(00)000-00-00'
};

let mask = IMask(inpPhone, maskOptions);

function showError(parentElement, msgElement, message){
	msgElement.textContent = message
	parentElement.classList.add('error')
}

function hideError(parentElement, msgElement){
	msgElement.textContent = ""
	parentElement.classList.remove('error')
}

for(let inp of form){
	let {name} = inp
	if(name){
		inp.addEventListener('input', validateInput)
	}
}

function validateInput(e){
	let target = e.target
	let formGroup = target.parentElement
	let errorElement = target.nextElementSibling
	
	if(target.name === 'name'){
		if(target.value.length <= 2){
			showError(formGroup, errorElement, 'Ism 3ta harfdan oshishi kerak')
			nameStatus = false
		}else{
			hideError(formGroup, errorElement)
			nameStatus = true
		}
	}else if(target.name === 'email'){
		if(!target.value.includes("@")){
			showError(formGroup, errorElement, 'Emailda @ belgisi bo\'lishi kerak')
			emailStatus = false
		}else{
			hideError(formGroup, errorElement)
			emailStatus = true
		}
	}else if(target.name === 'phone'){
		if(target.value.length !== 17){
			showError(formGroup, errorElement, 'Raqam noto\'g\'ri')
			phoneStatus = false
		}else{
			hideError(formGroup, errorElement)
			phoneStatus = true
		}
	}
}

inpName.addEventListener('blur', (e) => {
	let target = e.target
	let formGroup = inpName.parentElement
	let errorElement = inpName.nextElementSibling
	if(target.value === ''){
		showError(formGroup, errorElement, "To'ldirilishi shart")
		nameStatus = false
	}else{
		hideError(formGroup, errorElement)
		nameStatus = true
	}
})


form.addEventListener('submit', (e) => {
	e.preventDefault()
	let formData = new FormData(form)
	let values = Object.fromEntries(formData.entries())

	if(nameStatus && emailStatus && phoneStatus){
		console.log(values)
	}else{
		console.log('Error')
	}
})