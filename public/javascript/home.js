

// San Francisco //
$.ajax({
    url: "/test",
    type: 'GET',
    datatype: 'json',
    success: function(data) {
    	console.log(data);
    	var tweets = data.statuses;
    	var tweetTemplate = _.template($('#tweets-template').html());

    	for (i = 0; i <= tweets.length; i++) {
    		printTweet(tweets[i]);
    	}

    	function printTweet(tweet) {
    		var tweetHtml = tweetTemplate(tweet);
    		$('#tweet-placeholder-SF').append(tweetHtml);
    	}
    }
});

