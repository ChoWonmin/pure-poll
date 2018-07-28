const register = new function() {
    const user = {};

    this.addAction = function() {

        $('#login-btn').click(function() {
            const auth = Firebase.getAuth();

            const input = {
                id: $('#id-input').val(),
                password: $('#password-input').val(),
            };

            //const res = auth.signInWithEmailAndPassword(input.id, input.password);

            console.log(res);

            //location.href='/';
        });

        $('#register-btn').click(function() {
            const auth = Firebase.getAuth();
            const inputs = $('input');
            let valid = false;

            _.forEach(inputs, r => {
                if(r.value=='' || r.value==null){
                    valid = true;
                }
                user[r.name] = r.value;
            });

            if (valid)
                alert('입력창을 모두 입력해주세요');
            if (user.kakaoId==null)
                alert('카카오 인증해주세요');
            if (user.password !== user.repassword)
                alert('패스워드가 일치하지 않습니다.')

            const res = auth.createUserWithEmailAndPassword(user.responserId, user.password).catch(function(error) {
                alert(error);
            });
            console.log(res);

            delete user.password;
            delete user.repassword;

            Firebase.set(/responderList/+user.kakaoId, user);
        });

        $('#kakao-auth-btn').click(async function() {
            await KakaoApp.auth();
            user['kakaoId'] = (await KakaoApp.requestAPI()).id;
        })

    }
}
register.addAction();
