

// San Francisco //
$.ajax({
    url: "/sanFranciscoTweets",
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


// New York City
$.ajax({
    url: "/newYorkTweets",
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
            $('#tweet-placeholder-NYC').append(tweetHtml);
        }
    }
});


// Washington DC
$.ajax({
    url: "/washingtonDCTweets",
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
            $('#tweet-placeholder-DC').append(tweetHtml);
        }
    }
});