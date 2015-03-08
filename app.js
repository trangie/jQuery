var main = function(){
	"use strict";

	$(".comment-input button").on("click", function (event) {
		//Add a comment to the comments section
		var $newComment = $("<p>").text($(".comment-input input").val());
		$(".comments").append($newComment);
	});
};

$(document).ready(main);