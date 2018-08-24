const Firebase = new function() {
    var config = keyConfig.firebase.config;
    firebase.initializeApp(config);
    const database = firebase.database();
    const auth = firebase.auth();

    this.set = (path, obj) => {
        database.ref(path).set(obj);
    }

    this.push = (path, obj) => {
        database.ref(path).push(obj);
    }

    this.update = (path, obj) => {
        database.ref(path).update(obj);
    }

    this.get = async (path) => database.ref(path).once('value');

    this.remove = (path) => {
        database.ref(path).remove();
    }

    this.getUniqueKey = (path) => database.ref(path).push().key;

    this.getAuth = () => auth;

}

/* Firebase Test */

async function test() {
    Firebase.set('abc',{a:12,b:'hello',c:'k'});
    Firebase.push('abc',{name:'hi',age:20});
    Firebase.update('abc',{a:200})
    Firebase.getUniqueKey('abc');
    //Firebase.remove('abc');

    console.log(Firebase.getUniqueKey('abc'));
    console.log( (await Firebase.get('/abc/a')).val() );
}
//test();
