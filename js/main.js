$(document).ready(function(){
	createNewList = function () {
		$(".content").find(".new-list").slideDown();
	},

	showNewList = function () {
		var lists = $(".content").find("ul");
		var newListText = $(".new-list").find("textarea").val().replace(/\r\n|\r|\n/g,"<br />");

		if (newListText.length) {
			var delButton = "<div class='delButton'>delete</div>";
			var newListDiv = newListText + delButton;

			$(lists).append("<li>" + newListDiv  + "</li>");
			$(".content").find(".new-list").slideUp();	
		};
		$(".delButton").click( function() {
			$(this).parent().remove();
		});
	},

	$("nav").on('click', '.new-list-button', createNewList);

	$(".new-list").on('click', 'button', showNewList);

	
});