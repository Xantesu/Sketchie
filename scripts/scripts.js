var gridSize = 16
var gridColor = "black";

$(document).ready(function(){
	createGrid(gridSize);
	$(document).on("mouseenter",".block", function(){
		$(this).css("background-color",gridColor);
	});
	$(".reset").click(function(){
		reset();
	});
	$(".color").click(function(){
		gridColor = $(this).css("background-color");
		$(".color").css("opacity","1");
		$(this).css("opacity","0.5");
	});
});

function createGrid(size){
	for (var i=0;i<size;i++) 
	{
	for (var j=0;j<size;j++) {
		$(".grid").append("<div class='block'></div>");
	}
	}
}

function reset() {
	$(".grid .block").remove();
	newGridSize = prompt("How big should your grid be?");
	if (newGridSize === 32) {
		$(".block").css("background-color","red");
	};
	createGrid(newGridSize);
	if (newGridSize === "32") {
		$(".block").css("width","14px");
		$(".block").css("height","14px");
	};
}