$(document).ready(function(){
	createGrid();
	$("#reset").click(function(){
		$(".block").css("background-color","#fff");
		reset();
	})
	$(".block").hover( function() {
		$(this).css("background-color","black");
	});
});

function createGrid(){
	var gridSize = 16;
	for (var i=0;i<gridSize;i++) 
	{
	for (var j=0;j<gridSize;j++) {
		$(".grid").append("<div class='block'></div>");
	}
	}
}

function reset() {
	$(".grid .block").remove();
	createGrid();
}