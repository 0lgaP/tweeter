$(document).ready(function() {
  console.log(`she ready`)
  $('#myButton').on('click', () => {
    console.log('button was clicked')
  })

  myButton.on('click', () => {
    //grab input field
    const myInput = $('#my-input');

    //grab value the user typed
    const newText = myInput.val();

    //create a new li with the text from the user
    const myNewLi = $('<li>').text(newText);

    //add to DOM
    $('#main-list').append(myNewLi)

    //clear input field
    myInput.val('');

    //give focus (click into input field)
    myInput.focus();

    //to set enter - it has somehting do do with the form

  })



  
});