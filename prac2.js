var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.lenght;
alert("you have written " + tweetCount + "characters, you have "+ (140 - tweetCount) + " characters remaining. " );

var name = "Nafiul";
name.slice(,6);

var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.slice(0,140);
alert(tweetCount);

alert(prompt("Compose your tweet : ").slice(0,140));



