const KakaoApp = new function() {
    Kakao.init(keyConfig.kakao.js);

    this.auth = function() {
        return new Promise((resolve , reject)=> {
            Kakao.Auth.login({
                success: function(authObj) {
                    resolve(authObj);
                },
                fail: function(err) {
                    console.log(err);
                    reject(err);
                }
            });
        });
    }

    this.requestAPI = function() {
        return new Promise((resolve, reject)=> {
            Kakao.API.request({
                url: '/v1/user/me',
                success: function(res) {
                    resolve(res);
                },
                fail: function(err) {
                    reject(err);
                }
            });
        })
    }

    this.logout = function() {
        Kakao.Auth.logout(function() {
            console.log('logout')
        });
    }
}

