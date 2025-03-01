var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.lenght;
alert("you have written " + tweetCount + "characters, you have "+ (140 - tweetCount) + " characters remaining. " );

var name = "Nafiul";
name.slice(,6);

var tweet = prompt("Compose your tweet: ");
var tweetCount = tweet.slice(0,140);
alert(tweetCount);

alert(prompt("Compose your tweet : ").slice(0,140));

var name = prompt("whats is your name ?: ")
var firstChar = name.slice(0,1);

var upperCaseFirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

var capitilisedName = upperCaseFirstChar + restOfName;

alert("Hello, " + capitilisedName);

name = name.toUpperCase();
name =name.toLowerCase();


function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "leap Year.";
      } else {
        return "Not leap year.";
      }
    }
    else {
      return "leap year.";
    }
  }
  else {
    return "Not leap year.";
  }
}

