console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Your form has been submitted!');
}
let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);

//--------------------------------------------------


function mouseCompliment(evt) {
	alert(`Hey good lookin',\nWhat'cha got cookin'?\n \nClick 'OK' if you're a cool cucumber.`);
}
let picture = document.querySelector('img');
picture.addEventListener('mouseover', mouseCompliment)

