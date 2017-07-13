var playerOneBtn = document.querySelector("button");
var playerTwoBtn = document.querySelectorAll("button")[1];
var reset = document.querySelectorAll("button")[2];
var oneScore = 0;
var twoScore = 0;
var limitBtn = document.querySelector("input");
var limit = 5; 
var one = document.querySelector("span");
var two = document.querySelectorAll("span")[1];
var score = document.querySelector("#score");
var gameOver = false;

limitBtn.addEventListener("change",function(){
	resetAll();
	score.textContent = limitBtn.value;
	limit = Number(limitBtn.value);
});

playerOneBtn.addEventListener("click",function(){
	if(!gameOver){
		oneScore++;
		one.textContent = oneScore;
		if(oneScore >= limit){
			one.classList.add("winner");
			gameOver = true;
		}
	}
});

playerTwoBtn.addEventListener("click",function(){
	if(!gameOver){
		twoScore++;
		two.textContent =twoScore;
		if(twoScore >= limit){
			two.classList.add("winner");
			gameOver = true;
		}
	}
});

function resetAll(){
	oneScore = 0;
	twoScore = 0;
	gameOver = false;
	one.textContent = oneScore;
	two.textContent = twoScore;
	one.classList.remove("winner");
	two.classList.remove("winner");
}

reset.addEventListener("click",resetAll);