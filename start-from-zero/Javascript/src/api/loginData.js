function LoginData(){
    const loginButton = document.getElementById('login-btn');
    loginButton.addEventListener('click',function(e){
        function Users(loginUsername,loginPassword){
            this.loginUsername = loginUsername;
            this.loginPassword = loginPassword;
        }

        const userCredential = document.getElementById('username-login').value;
        const passwordCredential = document.getElementById('password-login').value;
        const newUser = new Users(userCredential,passwordCredential);

        

        localStorage.setItem('newUser',JSON.stringify(newUser));

        const parsedCredentials = JSON.parse(localStorage.getItem('newUser'));

        
        console.log(parsedCredentials);
    })
}

// var Module = (function(){
//     function auth(){
//         var storage = localStorage;

//         var service = {
//             setItem: setItem,
//             getItem: getItem,
//             removeItem: removeItem,
//        
//         };
//         return service;

//         function setItem(key, token) {
//             storage.setItem(key, token);
//         }

//         function removeItem(key) {
//             storage.removeItem(key);
//         }

//         function getItem(key) {
//             cachedToken = storage.getItem(key);
//             return cachedToken;
//         }

//     }
// })();