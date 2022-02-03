/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(() => {

 //Hide Errors..........................................//
 $('#display-error').hide()

 
 // LOAD TWEETS .......................................................................//
 const loadTweets = () => {
   $.ajax({
     url: "/tweets",
     method: "GET",
     dataType: "json",
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
  
  
  //VULNERABILITY.........................................................................//
//escape only works on the way out, if you put it into the form, you will break her!
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};



// CREATE TWEET ELEMENT ..............................................................//
const createTweetElement = (obj) => {
  
  const $time = timeago.format(obj.created_at);
  const $tweet = `<div class="tweet-container">
  <div>
  <article class="icon-holder">
  <div class="credentials">
  <img class="icon" id="tweet-credential-icon" src="${obj.user.avatars}">
  <span>${obj.user.name}</span>
  </div>
  <span>${obj.user.handle}</span>
  </article>
  <div class="tweet-text">
  <p>${escape(obj.content.text)}</p>
  </div>
  </div>
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
  const showError = (msg) => {
    //no appending - we append 5ever

    return $('#display-error').html(msg)
  }
  
  
  $form.on("submit", function(event) {
    event.preventDefault();
    const $tweetx = $('#tweet-text')
    const tweetlength = $tweetx.val().length; 
    
    const serializedData = $(this).serialize();
    
    if ($tweetx.val() === "" || $tweetx.val() === null) {
      const errorShow = showError("&#x1f64a"+ " Please type some words " + "&#x1f64a")
      $('#display-error').show("slow").slideDown()
      $('#tweet-text').on('focus', () => {
        $('#display-error').hide()
      })
    }
    
    if(tweetlength > 140) {
      const errorShow = showError("&#128585" + " This story is too long " + "&#128585")
      $('#display-error').show("slow").slideDown()
      $('#tweet-text').on('focus', () => {
        $('#display-error').hide()
      })
    } 
    
    if(tweetlength <= 140) {
      $.post("/tweets", serializedData, (response) => {
        $tweetx.val("").empty();
        console.log(response);
        console.log('form was submitted');
        loadTweets()
      })
    }
  })
  
});