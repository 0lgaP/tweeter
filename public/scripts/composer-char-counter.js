$(document).ready(function() {
  
  const myInput = $('#tweet-text');
  // 

  $(myInput).on('input', () => {

    let counterInit = myInput.val().length
    let counterOut = 140 - counterInit
    if(counterOut >= 0){
      $('#output').val(counterOut)

    } 
    if (counterOut < 0){
      $('#output').removeClass('counter');
      $('#output').addClass('counterNegative');
      $('#output').val(counterOut);
    }

    
    
  })

  $(myInput).on('input', () => {

    let counterInit = myInput.val().length
    let counterOut = 140 - counterInit
    if(counterOut >= 0){
      $('#output').val(counterOut)
      $('#output').removeClass('counterNegative');
      $('#output').addClass('counter');
    } 
    if (counterOut < 0){
      $('#output').removeClass('counter');
      $('#output').addClass('counterNegative');
      $('#output').val(counterOut);
      
    
    }

  })

})

  
