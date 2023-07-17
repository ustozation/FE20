// clientWidth clientHeight

// // console.log('height' , document.documentElement.clientHeight);
// console.log('width' , document.documentElement.clientWidth);
// // console.dir(document.documentElement)
// let btn = document.querySelector('button')
// btn.addEventListener('click' , ()=>{
// 	if(document.documentElement.clientWidth <= 390){
// 	document.documentElement.baseURI = 'https://kun.uz'
// }
// else{
// 	console.log('err');
// }

// })
window.addEventListener('scroll' , ()=>{
	
	console.log('pageYoffset' , window.pageYOffset);
	console.log('pageXoffset' , window.pageXOffset);
})
