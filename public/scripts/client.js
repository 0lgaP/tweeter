/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(() => {


// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]



// CREATE TWEET ELEMENT ..............................................................//
const createTweetElement = (obj) => {
  const $time = timeago.format(obj.created_at);
  const $tweet = `<div class="tweet-container">
  <header>
  <article class="icon-holder">
  <div class="credentials">
  <img class="icon" id="tweet-credential-icon" src="${obj.user.avatars}">
  <span>${obj.user.name}</span>
  </div>
  <span>${obj.user.handle}</span>
  </article>
  <div class="tweet-text">
  <p>${obj.content.text}</p>
  </div>
  </header>
  <footer>
  <span>${$time}</span>
  <div>
  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
  </div>
  </footer>
  </div>`
  return $tweet
}


// RENDER TWEETS .......................................................................//

  const renderTweets = (tweets) => {
    // clear out tweet container
    const $tweetContainer = $(".old-tweet");
    $tweetContainer.empty();
  
    // repopulate old-tweet-container
    for( const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetContainer.prepend($tweet);
    }
  }


  renderTweets(data);

});