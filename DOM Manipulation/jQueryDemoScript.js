$("li").mouseover(function(){
	$(this).css({
		"color":"orange",
		"font-size":"120%"
	});
});

$("li").mouseout(function(){
	$(this).css({
		"color":"black",
		"font-size":"100%"
	});
});