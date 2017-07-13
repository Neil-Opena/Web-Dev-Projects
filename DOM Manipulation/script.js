document.querySelectorAll("button")[1].addEventListener("click",function(){
	var body = document.body;
	if(body.style.background != "pink"){
		body.style.background = "pink";
	}else{
		body.style.background = "lightgreen";
	}
});

document.querySelector("button").addEventListener("click",function(){
	document.body.classList.toggle("blue");
});