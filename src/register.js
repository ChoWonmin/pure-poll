// var uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             return true;
//         },
//         uiShown: function() {
//             // The widget is rendered.
//             // Hide the loader.
//             document.getElementById('loader').style.display = 'none';
//         }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: '/register',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//         firebase.auth.GithubAuthProvider.PROVIDER_ID,
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: '/'
// };
// Firebase.makeLoginUi(uiConfig);
const register = new function() {

    this.addAction = function() {
        console.log($)

        $('#login-btn').click(function() {
            const auth = Firebase.getAyth();

            const input = {
                id: $('#id-input').val(),
                password: $('#password-input').val(),
            };

            const res = auth.signInWithEmailAndPassword(input.id, input.password).catch(function(error) {
                console.log('error')
                console.log(error);
            });

            console.log(res);
        });

        $('#register-btn').click(function() {
            const auth = Firebase.getAyth();

            const input = {
                id: $('#id-input').val(),
                password: $('#password-input').val(),
            };

            const res = auth.createUserWithEmailAndPassword(input.id, input.password).catch(function(error) {
                console.log('error')
                console.log(error);
            });

            console.log(res);

        });


        $('#kakao-auth-btn').click(function() {
            KakaoApp.login();
        })

        $('#kakao-logout-btn').click(function() {
            KakaoApp.logout();
        })
    }
}
register.addAction();
