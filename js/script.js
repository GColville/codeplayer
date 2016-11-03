$(document).ready(function() {
	//on hover the highlighted class will be applied to the element
	//when the mouse leaves the element the class will be removed
	$(".toggleButtons").hover(function() {
		$(this).addClass("highlighted");
	}, function() {
		$(this).removeClass("highlighted");
	});
	
	//when button is clicked the class is toggled depending
	//on whether it was originally applied or not
	$(".toggleButtons").click(function() {
		$(this).toggleClass("active");
		
		//remove the class highlighted so we know
		//if the class of active is applied to the button or not
		$(this).removeClass("highlighted");
		
		//show/hide panel when corresponding button is clicked
		var panelId = $(this).attr("id") + "Panel";
		
		$("#" + panelId).toggleClass("hidden");
		
		//identify the number of active panels
		var numberOfActivePanels = 4 - $(".hidden").length;
		
		//change width of panel when they are opened/closed
		$(".panel").width(($(window).width() / numberOfActivePanels) - 10);
	});
	
	//set the height of the panels
	//panel height is equal to the window height minus header height minus 15 px
	$(".panel").height($(window).height() - $("header").height() - 15);
	
	//panel width is equal to window width / 2 minus 10
	$(".panel").width(($(window).width() / 2) - 10);
		
	//change the HTML of the iframe when the user types
	$("textarea").on("change keyup paste", function() {
		$("#outputPanel").contents().find("html").html($("#htmlPanel").val());
	});
});