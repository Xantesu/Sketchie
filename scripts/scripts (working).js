var gridSize = 16
var gridColor = "black";
var dimension = 1;

$(document).ready(function(){
	createGrid(gridSize);
	$(document).on("mouseenter",".block", function(){
		$(this).css("background-color",gridColor);
	});
	$(".reset").click(function(){
		var size = 30
		newGridSize = prompt("How big should your new grid be?");
		reset();
		if (newGridSize === "32") {
			dimension = 2;
		} else if (newGridSize === "16") {
			dimension = 1;
		} else if (newGridSize === "48") {
			dimension = 3;
		};
		var newSize = size/dimension
		$(".block").css({"width":newSize+"px","height":newSize+"px"})
	});
	$(".color").click(function(){
		gridColor = $(this).css("background-color");
		$(".color").css("opacity","1");
		$(this).css("opacity","0.25");
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
	createGrid(newGridSize);
}