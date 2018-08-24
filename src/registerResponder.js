const RegisterResponder = function() {
    const user = {};

    const dropdown = new Dropdown('#location-dropdown');

    const input = {};
    const errorbox = {};
    let gender = 0;
    let idvalid = false;
    let passwordvalid = false;
    let repasswordvalid = false;
    let datevalid = false;
    let kakaovalid = false;
    let location = 0;
    let date;

    input['id'] = $('#id-input');
    input['password'] = $('#password-input');
    input['repassword'] = $('#repassword-input');
    input['date'] = $('#date-input');

    errorbox['errorbox-id'] = $('#errorbox-id');
    errorbox['errorbox-id'].addClass('error');
    errorbox['errorbox-password'] = $('#errorbox-password');
    errorbox['errorbox-password'].addClass('error');
    errorbox['errorbox-repassword'] = $('#errorbox-repassword');
    errorbox['errorbox-repassword'].addClass('error');
    errorbox['errorbox-location-dropdown'] = $('#errorbox-location-dropdown');
    errorbox['errorbox-location-dropdown'].addClass('error');

    errorbox['errorbox-gender'] = $('#errorbox-gender');
    errorbox['errorbox-gender'].addClass('error');

    errorbox['errorbox-date'] = $('#errorbox-date');
    errorbox['errorbox-date'].addClass('error');


    input.id.keyup(function () {
        if( $(this).val().match('@') != null  )
        {
            errorbox['errorbox-id'].removeClass('error');
            errorbox['errorbox-id'].addClass('success');
            errorbox['errorbox-id'].text('정상입니다.');
            idvalid = true;
        }
        else{
            errorbox['errorbox-id'].removeClass('success');
            errorbox['errorbox-id'].addClass('error');
            errorbox['errorbox-id'].text('올바른 형태의 이메일을 입력해주세요.');
            idvalid = false;
        }
        if($(this).val().length == 0){
            errorbox['errorbox-id'].removeClass('success');
            errorbox['errorbox-id'].addClass('error');
            errorbox['errorbox-id'].text('필수 항목입니다.');
            idvalid = false;
        }
    });

    input.password.keyup(function () {
        if(($(this).val().length)<10){
            errorbox['errorbox-password'].removeClass('success');
            errorbox['errorbox-password'].addClass('error');
            errorbox['errorbox-password'].text('10자리 이상 입력해주세요.');
            passwordvalid = false;
        }
        else{
            errorbox['errorbox-password'].removeClass('error');
            errorbox['errorbox-password'].addClass('success');
            errorbox['errorbox-password'].text('정상입니다.');
            passwordvalid = true;
            if( $(this).val() != $(input.repassword).val() ){
                errorbox['errorbox-repassword'].removeClass('success');
                errorbox['errorbox-repassword'].addClass('error');
                errorbox['errorbox-repassword'].text('동일한 비밀번호를 입력해주세요.');
                repasswordvalid = false;
            }
            else{
                errorbox['errorbox-repassword'].removeClass('error');
                errorbox['errorbox-repassword'].addClass('success');
                errorbox['errorbox-repassword'].text('정상입니다.');
                repasswordvalid = false;
            }
        }
        if($(this).val().length == 0){
            errorbox['errorbox-password'].removeClass('success');
            errorbox['errorbox-password'].addClass('error');
            errorbox['errorbox-password'].text('필수 항목입니다.');
            passwordvalid = false;
            if( $(this).val() != $(input.repassword).val() ){
                errorbox['errorbox-repassword'].removeClass('success');
                errorbox['errorbox-repassword'].addClass('error');
                errorbox['errorbox-repassword'].text('동일한 비밀번호를 입력해주세요.');
                repasswordvalid = false;
            }
            else{
                errorbox['errorbox-repassword'].removeClass('success');
                errorbox['errorbox-repassword'].addClass('error');
                errorbox['errorbox-repassword'].text('필수 항목입니다.');
                repasswordvalid = false;
            }
        }

    });
    input.repassword.keyup(function () {
        if($(this).val().length<10 ){
            errorbox['errorbox-repassword'].removeClass('success');
            errorbox['errorbox-repassword'].addClass('error');
            errorbox['errorbox-repassword'].text('10자리 이상 입력해주세요.');
            repasswordvalid = false;
        }
        else if( $(this).val() != $(input.password).val() ){
            errorbox['errorbox-repassword'].removeClass('success');
            errorbox['errorbox-repassword'].addClass('error');
            errorbox['errorbox-repassword'].text('동일한 비밀번호를 입력해주세요.');
            repasswordvalid = false;
        }
        else{
            errorbox['errorbox-repassword'].removeClass('error');
            errorbox['errorbox-repassword'].addClass('success');
            errorbox['errorbox-repassword'].text('정상입니다.');
            repasswordvalid = true;
        }
        if($(this).val().length == 0){
            errorbox['errorbox-repassword'].removeClass('success');
            errorbox['errorbox-repassword'].addClass('error');
            errorbox['errorbox-repassword'].text('필수 항목입니다.');
            repasswordvalid = false;
        }
    });

    input.date.change(function () {
        date = $(this).val();
        errorbox['errorbox-date'].removeClass('error');
        errorbox['errorbox-date'].addClass('success');
        errorbox['errorbox-date'].text('정상입니다.');
        datevalid = true;
    })

    dropdown.clickAction(function(text) {
        errorbox['errorbox-location-dropdown'].text('');
        if(text=="서울특별시"){
            location = 1;
        }
        if(text=="경기도"){
            location = 2;
        }
        if(text=="강원도"){
            location = 3;
        }
        if(text=="첫 번째 선택사항"){
            location = 4;
        }
        if(text=="두 번째 선택사항"){
            location = 5;
        }
    });

    $('#male').click(function() {
        gender = 'M';
        errorbox['errorbox-gender'].removeClass('error');
        errorbox['errorbox-gender'].addClass('success');
        errorbox['errorbox-gender'].text(' ');
    })

    $('#female').click(function() {
        gender = 'F';
        errorbox['errorbox-gender'].removeClass('error');
        errorbox['errorbox-gender'].addClass('success');
        errorbox['errorbox-gender'].text(' ');
    })

    $('#kakaoAuth-button').click(async function() {
        await KakaoApp.auth();
        user['kakaoId'] = (await KakaoApp.requestAPI()).id;
        kakaovalid = true;
    })

    $('#registerResponder-button').click(function() {
        if(idvalid && passwordvalid && repasswordvalid && gender!=0 && location!=0 && datevalid && kakaovalid){
            console.log(user.kakaoId);
            const auth = Firebase.getAuth();
            const res = auth.createUserWithEmailAndPassword(input.id.val(), input.password.val()).catch(function(error) {
                alert(error);
            });

            console.log(res);
            Firebase.set('/responderList/'+user.kakaoId,{kakaoId:user.kakaoId, gender:gender ,responderId:input.id.val(),age:date,address:location});
            alert("회원가입이 완료되었습니다. 로그인 해주세요.");
            location.href='/';
        }
        else{
            alert("빈 항목을 확인해 주세요");
        }

    });

};

const registerResponder = new RegisterResponder();