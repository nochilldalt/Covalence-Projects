// This section of code is where we acomplish the message to become a alert 
// when the user clicks the submit button
$('#btnSubmit').click(function () {
    let message = $('#msg').val()
    alert(message)
// This section of code is where we make our iteams that are submited from the text box
// to be come a unordered list
     let li = $('<li>' + message + '</li>')
     $('ul').append(li)
    event.preventDefault()
// this is where when the user single clicks a iteam from the lis it changes color
    $(li).click(function(){
        $(li).css('color', 'red')
    })
// This part is where a double click to a iteam in the lis 
// will remove the iteam that has been clicked on
    $(li).dblclick(function(){
        $(li).remove()
    })
// This is where the the iteam when moused over with the curser would have 
// been given a background color
    // $('h2').mouseover(function(){
    //     $('h2').css('background-color', 'blue')
    //     $('h2').css('border-radius'," 50%")
    // })
})
// The function below makes the browser know to shade or block the user from submitting
// a blank text box
$(document).keydown(function () {
    let message = $('#msg').val()
    if (message) {
        $('#btnSubmit').removeAttr('disabled')
    }
})
$('#btnSubmit').attr('disabled', 'disabled')
$('body').append('<div class="name"></div>')
$('body').append('<ul></ul>')