/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(() => {

// LOAD TWEETS .......................................................................//
const loadTweets = () => {
  $.ajax({
    url: "/tweets",
    method: "GET",
    // dataType: "json",
    success: (tweets) => {
      console.log("data:", tweets)
      renderTweets(tweets);

    },
    error: (err) => {
      console.log(`there was an error: ${err}`)
    }
  })
}

loadTweets();




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

//Access the form and save it as a jquery-esque const//
const $form = $("#new-tweet-form");

// ON SUBMIT ...........................................................................//

$form.on("submit", function(event) {
  event.preventDefault();
  const serializedData = $(this).serialize();
  const $tweetx = $('#tweet-text')
  const tweetlength = $tweetx.val().length; 
  
  if ($tweetx.val() === "" || $tweetx.val() === null) {
      alert("person of few words eh? Please come up with atleast one before posting")
    }
  
  if(tweetlength > 140) {
      return alert("Yon tweet be too long, doeth shorteneth yon story", serializedData.length)
    } 
    
  $.post("/tweets", serializedData, (response) => {
    $tweetx.val("").empty();
    console.log(response);
    console.log('form was submitted');
    loadTweets()
  })
 })

});