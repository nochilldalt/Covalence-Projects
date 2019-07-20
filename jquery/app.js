$('#btnSubmit').click(function () {
    let message = $('#msg').val()
    alert(message)
    
     let li = $('<li>' + message + '</li>')
     $('ul').append(li)
    event.preventDefault()
    $(li).click(function(){
        $(li).css('color', 'red')
    })
    $(li).dblclick(function(){
        $(li).remove()
    })
    // $('h2').mouseover(function(){
    //     $('h2').css('background-color', 'blue')
    //     $('h2').css('border-radius'," 50%")
    // })
})
$(document).keydown(function () {
    let message = $('#msg').val()
    if (message) {
        $('#btnSubmit').removeAttr('disabled')
    }
})
$('#btnSubmit').attr('disabled', 'disabled')

$('body').append('<div class="name"></div>')

$('body').append('<ul></ul>')