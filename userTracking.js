//Tracking the user here
//the codes here adapted from Week 3 Practical, author: Dr.	Claire Ellul

var userMarker;

function trackLocation(){
	if (navigator.geolocation){
		navigator.geolocation.watchPosition(showPosition);
		} else{
			document.getElementById('showLocation').innerHTML='Geolocation is not supported by this browser';}}

function showPosition(position){
	if (userMarker){mymap.removeLayer(userMarker);}
	userMarker=L.marker([position.coords.latitude,position.coords.longitude],{icon:testMarkerPink}).addTo(mymap).bindPopup('<b>I am here!</b>'+
	[position.coords.latitude,position.coords.longitude]);
	getDistance();
	mymap.setView([position.coords.latitude,position.coords.longitude],13)
	}
	
//run the tracking location function automatically when starting up the app
document.addEventListener('DOMContentLoaded',function(){trackLocation();},false); 