var main = function(){
	"use strict";

	var addCommentFromInputBox = function(){
		var $newComment;

		if($(".comment-input input").val() !==""){
			$newComment = $("<p>").text($(".comment-input input").val());
			$newComment.hide();
			$(".comments").append($newComment);
			$newComment.fadeIn();
			//	
			$(".comment-input input").val("");

		}
	};

	//Update feed when user clicks on "+" button
	$(".comment-input button").on("click", function (event) {
		addCommentFromInputBox();
	});

	//Update feed upon ENTER key press
	$(".comment-input input").on("keypress", function (event){
		if(event.keyCode === 13){
			addCommentFromInputBox();
		}
	});
};

$(document).ready(main);