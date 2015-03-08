var main = function(){
	"use strict";

	$(".comment-input button").on("click", function (event) {
		//Add a comment to the comments section
		if($(".comment-input input").val() !==""){
			var $newComment = $("<p>").text($(".comment-input input").val());
			$(".comments").append($newComment);

			//Reset input box
			$(".comment-input input").val("");
		}
	});

	$(".comment-input input").on("keypress", function (event){
		if(event.keyCode === 13){
			if($(".comment-input input").val() !==""){
				var $newComment = $("<p>").text($(".comment-input input").val());
				$(".comments").append($newComment);

				//Reset input box
				$(".comment-input input").val("");
			}
		}
	});
};

$(document).ready(main);