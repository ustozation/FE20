let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')
let slides = document.querySelectorAll('.slide')

let slideCount = 0;

prevBtn.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = slides.length - 1
	}else{
		slideCount--
	}
	hideSlide()
	showSlide(slideCount)
	console.log(slideCount)
})

nextBtn.addEventListener('click', () => {
	if(slideCount > slides.length - 2){
		slideCount = 0
	}else{
		slideCount++  
	}
	hideSlide()
	showSlide(slideCount)
})

function showSlide(i = 0){
	slides[i].classList.add('active')
}

function hideSlide(){
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}

hideSlide()
showSlide()