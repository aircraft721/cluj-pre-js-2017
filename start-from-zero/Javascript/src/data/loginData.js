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
    })
}

