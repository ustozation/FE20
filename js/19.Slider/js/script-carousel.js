let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')
let slides = document.querySelectorAll('.slide')
let sliderInner = document.querySelector('.slider-inner')

let slideWidth = parseFloat(window.getComputedStyle(slides[0]).width)

console.log(slideWidth)
// sliderInner.style.width = `${slides.length}00%`

let slideCount = 0;

prevBtn.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = slides.length - 1
	}else{
		slideCount--
	}
	sliderInner.style.transform = `translateX(-${slideCount * slideWidth}px)`
})

nextBtn.addEventListener('click', () => {
	if(slideCount > slides.length - 2){
		slideCount = 0
	}else{
		slideCount++  
	}

	sliderInner.style.transform = `translateX(-${slideCount * slideWidth}px)`
})

// function showSlide(i = 0){
// 	slides[i].classList.add('active')
// }

// function hideSlide(){
// 	slides.forEach((slide) => {
// 		slide.classList.remove('active')
// 	})
// }
