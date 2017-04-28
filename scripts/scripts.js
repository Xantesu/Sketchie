var gridSize = 16

$(document).ready(function(){
	createGrid(gridSize);
	$(document).on("mouseenter",".block", function(){
		$(this).css("background-color","black");
	});
	$(".reset").click(function(){
		reset();
	});
	$(".test").click(function(){
		$(".test").css("background-color","black");
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