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



  })



  
