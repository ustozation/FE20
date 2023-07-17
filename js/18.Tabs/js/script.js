let tabLinks = document.querySelectorAll('.tab-link')
let tabContents = document.querySelectorAll('.tab-content')
let tabLinkParent = document.querySelector('.tab-links')

// let colors = ['#ffd073', '#98ff73', '#73c2ff', '#ff737c']
// DOM 
// CSSOM
// BOM 


function hideTab(){
	tabContents.forEach((tabContent) => {
		tabContent.classList.remove('isOpen')
	})

	tabLinks.forEach((tabLink) => {
		tabLink.classList.remove('active')
		tabLink.style.backgroundColor = 'rgb(171, 171, 255)'
	})

}

function showTab(i = 0){
	tabContents[i].classList.add('isOpen')
	tabLinks[i].classList.add('active')
	
	let { backgroundColor: tabContentBg, } = window.getComputedStyle(tabContents[i])
	tabLinks[i].style.backgroundColor = tabContentBg
}

// tabLinks.forEach((tabLink, i) => {
// 	tabLink.addEventListener('click', () => {
// 		hideTab()
// 		showTab(i)
// 		// console.log(i)
// 	})
// })

tabLinkParent.addEventListener('click', (e) => {
	tabLinks.forEach((tabLink, i) => {
		if(e.target === tabLink){
			hideTab()
			showTab(i)
		}
	})
})

hideTab()
showTab()
