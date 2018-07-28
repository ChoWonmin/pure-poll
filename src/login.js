$('#login-btn').click(function() {
    const auth = Firebase.getAuth();

    const input = {
        id: $('#id-input').val(),
        password: $('#password-input').val(),
    };

    const res = auth.signInWithEmailAndPassword(input.id, input.password);

    console.log(res);

    //location.href='/';
});