const KakaoApp = new function() {
    Kakao.init(keyConfig.kakao.js);

    this.login = function() {
        Kakao.Auth.login({
            success: function(authObj) {
                console.log(authObj);
                Kakao.API.request({
                    url: '/v1/user/me',
                    success: function(res) {
                        console.log(res);
                    },
                    fail: function(error) {
                        console.log(error);
                    }
                });
            },
            fail: function(err) {
                console.log(err);
            }
        });
    }

    this.logout = function() {
        Kakao.Auth.logout(function() {
            console.log('logout')
        });
    }
}

