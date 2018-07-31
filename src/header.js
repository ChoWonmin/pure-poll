console.log('header')

$('.logo').click(function() {
    location.href='/';
});

$('.login-nav').click(function() {
    $('.modal-mask').css('display','table');
    $('.modal-body').load('/login');
    //location.href='/login';
});

$('.register-nav').click(function() {
    console.log('re')
    location.href='/register';
});


$('.modal-mask').click(function() {
    $(this).css('display','none');
})
$('.modal-container').click(function(event) {
    event.stopPropagation();
})

