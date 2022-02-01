$(document).ready(function() {
  
  const myInput = $('#tweet-text');
  // 

  $(myInput).on('input', () => {

    let counterInit = myInput.val().length
    let counterOut = 140 - counterInit
    if(counterOut >= 0){
      $('#output').val(counterOut)
    } else {
      $('#output').removeClass('counter');
      $('#output').addClass('counterNegative');
      $('#output').val(counterOut);
    }

    
    
  })




  // $('#myButton').on('click', () => {
  //   console.log('button was clicked')

  //   const myInput = $('#tweet-text');

  //   const newText = myInput.val();

  //   console.log(this)
  // })



  // myButton.on('click', () => {
  //   //grab input field
  //   const myInput = $('#my-input');

  //   //grab value the user typed
  //   const newText = myInput.val();

  //   //create a new li with the text from the user
  //   const myNewLi = $('<li>').text(newText);

  //   //add to DOM
  //   $('#main-list').append(myNewLi)

  //   //clear input field
  //   myInput.val('');

  //   //give focus (click into input field)
  //   myInput.focus();

    //to set enter - it has somehting do do with the form

  })



  
