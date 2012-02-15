/**
NAME: Danielle Collins
CLASS: CSCI 344
ASSIGNMENT: Project 2
DUE DATE:   Friday, February 17, 2012
PAGE: Scripts
GOAL:    Using JavaScript, jQuery, Spotter, and Bootstrap create a
client-side web application that tracks
            some information on twitter relating to a certain search term
and visualizes that information
            in some way.
*/

function main() {
//alert("hello world");


	var searchTerm;
	var loveCount = 0;
	
	$("#searchButton").click(function(){
		searchTerm = ($("#searchTerm").val());
		var s = new Spotter("twitter.search",
		{q:searchTerm, period:120},
		{buffer:true, bufferTimeout:2500});

		var tweetArray = [];

		s.register(function(tweet){
			var tweetReceived = $("<p>"+tweet.text+"</p>");
			tweetReceived.hide();
			$("#tweets").empty().prepend(tweetReceived);
			tweetReceived.fadeIn();
			tweetArray.push(tweetReceived);
			if (tweetArray.length > 10){
  			var tweetRemoved = tweetArray.shift();
			tweetRemoved.remove();
			
		 //	if(tweet.text.match(/love/) == "love") { 
		//		alert(tweet.text); 
		//	}
		}
	});


	s.start(); //start the spotter

});


}

$(document).ready(function(){
main();
});



