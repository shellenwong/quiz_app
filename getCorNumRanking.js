//the codes here adapted from Week 5 Practical, author: Dr.	Claire Ellul

var CorAnsNum;
var CorNum;
var url;
var NumJson;

//the correct number you get just match with your port id
function GetCorAnsNum(){
	CorAnsNum = new XMLHttpRequest();
	url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber + "/GetCorAnsNum/" + httpPortNumber ;
	CorAnsNum.open("GET", url, true);
	CorAnsNum.onreadystatechange = processNum;
	CorAnsNum.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	CorAnsNum.send();
}



function processNum(){
	if (CorAnsNum.readState < 4){
		console.log('Getting how many questions you answered correctly');
	}
	else if (CorAnsNum.readyState === 4){
		if (CorAnsNum.status >= 200 && CorAnsNum.status < 300) {
			NumJson = JSON.parse(CorAnsNum.responseText)[0];
			NumJson = NumJson.array_to_json[0].num_questions;        //the defined variable must be matched with the querystring in your server! 
			alert("Congratulations! You have answered " + NumJson + " questions correctly!");
		}
	}
}


//Ranking

var Rank;
var userRank;

function GetRanking(){
	Rank = new XMLHttpRequest();
	url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber + "/GetRanking/" + httpPortNumber ;
	Rank.open("GET", url, true); 
	Rank.onreadystatechange = processRanking;
    Rank.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	Rank.send();
}


function processRanking(){
	if (Rank.readState < 4){
		console.log('Loading client ranking');
	}
	else if (Rank.readyState === 4) { 
		if (Rank.status >= 200 && Rank.status < 300) {
			userRank = JSON.parse(Rank.responseText)[0];
			userRank = userRank.array_to_json[0].rank;
			alert("Congratulations! Your rank is " + userRank + " ! Try again! ");			
		}
	}
}


document.addEventListener('DOMContentLoaded',function(){GetCorAnsNum();},false);






















