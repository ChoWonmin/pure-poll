$('#login-btn').click(function() {
    const auth = Firebase.getAuth();

    const input = {
        id: $('#id-input').val(),
        password: $('#password-input').val(),
    };

    auth.signInWithEmailAndPassword(input.id, input.password).then(()=>{
        $('.modal-mask').css('display', 'none');
    }).catch((err) => {
        $('.result').text(err.message);
    });
});