var gridSize = 16

$(document).ready(function(){
	createGrid(gridSize);
	$(document).on("mouseenter",".block", function(){
		$(this).css("background-color","black");
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
	$(".block").remove();
	newGridSize = prompt("How big should your grid be?");
	createGrid(newGridSize);
}