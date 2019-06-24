//the codes here adapted from Week 4 Practical, author: Dr.	Claire Ellul
//put the function that will run automatically when starting the app
//startup function

function loadW3HTML(){
	w3.includeHTML();
}	   

function startup(){
	document.addEventListener('DOMContentLoaded',function(){
		getPort();
		loadW3HTML();
		trackLocation();
		getDistance();
		proximity();
		GetCorAnsNum();
	},false);
}	   






