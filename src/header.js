async function loginControll(loginEle, logoutEle) {
    Firebase.getAuth().onAuthStateChanged(user => {
       if (user) {
           loginEle.css('display','none');
           logoutEle.css('display','block');
       } else {
           loginEle.css('display','block');
           logoutEle.css('display','none');
       }
    });
}

$('.logo').click(function() {
    location.href='/';
});

$('.login-nav').click(function() {
    $('.modal-mask').css('display','table');
    $('.modal-body').load('/login');
});

$('.logout-nav').click(function() {
    Firebase.getAuth().signOut();
    location.href='/';
});

$('.register-nav').click(function() {
    location.href='/register';
});

$('.modal-mask').click(function() {
    $(this).css('display','none');
})
$('.modal-container').click(function(event) {
    event.stopPropagation();
})


loginControll($('.login-nav'), $('.logout-nav'));

