$("img").css({
	height: "300px",
	width: "auto"
});
var isToggled = false;
$("img").click(function(){
	if(!isToggled){
		$("img").attr("src","https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
	}else{
		$("img").attr("src","http://i.imgur.com/zvANQeG.jpg");
	}isToggled = !isToggled;
});
$("li").mouseover(function(){
	$(this).toggleClass("red");
});
$("li").mouseout(function(){
	$(this).toggleClass("red");
});
$("li").click(function(){

	$(this).toggleClass("green");
	$(this).toggleClass("strike");
});
var colors = ['pink','lightgreen','yellow','lightblue'];
$("body").keypress(function(){
	var num = Math.floor(Math.random() * 4);
	$("body").css("background-color",colors[num]);
});
$("input").keypress(function(event){
	if(event.which == 13){
		var content = $("input").val();
		document.querySelector("h1").textContent = content;
	}
	console.log(event);
});
$("h1").on("dblclick",function(){
	$(this).css("color","lightblue");
});

//EFFECTS
$("#fadeBtn").on("click",function(){
		$("div").slideToggle(1000);
});
