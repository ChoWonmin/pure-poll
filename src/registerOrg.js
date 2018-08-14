const RegisterOrg = function() {

    const dropdown = new Dropdown('#business-dropdown');

    const input = {};
    const errorbox = {};
    let idvalid = false;
    let passwordvalid = false;
    let repasswordvalid = false;
    let business = 0;
    let businessimgvalid = false;
    let phonevalid = false;



    input['id'] = $('#id-input');
    input['password'] = $('#password-input');
    input['repassword'] = $('#repassword-input');
    input['businessimg'] = $('#business-img');
    input['phone'] = $('#phone-input');

    errorbox['errorbox-id'] = $('#errorbox-id');
    errorbox['errorbox-id'].addClass('error');
    errorbox['errorbox-password'] = $('#errorbox-password');
    errorbox['errorbox-password'].addClass('error');
    errorbox['errorbox-repassword'] = $('#errorbox-repassword');
    errorbox['errorbox-repassword'].addClass('error');
    errorbox['errorbox-business-dropdown'] = $('#errorbox-business-dropdown');
    errorbox['errorbox-business-dropdown'].addClass('error');
    errorbox['errorbox-business-img'] = $('#errorbox-business-img');
    errorbox['errorbox-business-img'].addClass('error');
    errorbox['errorbox-phone'] = $('#errorbox-phone');
    errorbox['errorbox-phone'].addClass('error');


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


    dropdown.clickAction(function(text) {
        errorbox['errorbox-business-dropdown'].text('');
        if(text=="개인 사업자"){
            business = 1;
        }
        if(text=="공공 기관"){
            business = 2;
        }
        if(text=="국가 기관"){
            business = 3;
        }
        if(text=="첫 번째 선택사항"){
            business = 4;
        }
        if(text=="두 번째 선택사항"){
            business = 5;
        }
    });


    input.businessimg.change(function(e){
        if(e.target.files[0]==undefined) {
            errorbox['errorbox-business-img'].text('필수 항목입니다.');
            businessimgvalid = false;
        }
        else{
            console.log(e.target.files[0].name);
            businessimgvalid = true;
            errorbox['errorbox-business-img'].text('');
        }
        //console.log($(this).parents('.parent-selector').find('.element-to-paste-filename'));
        //$(this).parents('.parent-selector').find('.element-to-paste-filename').text(e.target.files[0].name);
    });

    input.phone.keyup(function () {
        const val = $(this).val();

        if(  val.match('-') != null)
        {
            errorbox['errorbox-phone'].removeClass('success');
            errorbox['errorbox-phone'].addClass('error');
            errorbox['errorbox-phone'].text('\'-\' 를 제외한 연락처를 입력해주세요.');
            phonevalid = false;
        } else if (isNaN(val)) {
            errorbox['errorbox-phone'].removeClass('success');
            errorbox['errorbox-phone'].addClass('error');
            errorbox['errorbox-phone'].text('숫자만 입력하세요.');
            phonevalid = false;
        } else if (val.length == 0) {
            errorbox['errorbox-phone'].removeClass('success');
            errorbox['errorbox-phone'].addClass('error');
            errorbox['errorbox-phone'].text('필수 항목입니다.');
            phonevalid = false;
        }
        else {
            errorbox['errorbox-phone'].removeClass('error');
            errorbox['errorbox-phone'].addClass('success');
            errorbox['errorbox-phone'].text('정상입니다.');
            phonevalid = true;
        }

    });



    $('#registerOrg-button').click(function() {
        if(idvalid && passwordvalid && repasswordvalid && business!=0 && businessimgvalid && phonevalid){
            Firebase.push('orgList',{orgId:input.id.val(),orgPassword:input.password.val(),orgPhone:input.phone.val(),orgType:business});
            alert("회원가입이 완료되었습니다. 로그인 해주세요.");
            location.href = '/';
        }
        else{
            alert("빈 항목을 확인해 주세요");
        }

    });

};

const registerOrg = new RegisterOrg();