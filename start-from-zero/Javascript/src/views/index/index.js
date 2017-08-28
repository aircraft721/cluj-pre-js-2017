
function redirectToEvaluation(){
    const evaluations= document.querySelector('.evaluations-page');
    evaluations.addEventListener('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        app.innerHTML = EvaluationsPage();
        //redirectToLogin();
        redirectToNewEvaluation();
    });
}

function redirectToNewEvaluation(){
    app.innerHTML = EvaluationsPage();
    const newEvaluations = document.querySelector('.new-evaluations-page');
    newEvaluations.addEventListener('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        app.innerHTML = NewEvaluationPageAll();
        //redirectToLogin();
        redirectToEvaluation();
        btn.addEventListener('click',function(e){
            const username = document.getElementById('username-id').value;
            const password = document.getElementById('password-id').value;
            alert(username);
            alert(password);
        })
    
    });
}

function redirectToLogin(){
    const logoutButton = document.querySelector('.link-logout');
    logoutButton.addEventListener('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        app.innerHTML = Login();
    });
}

function redirectLoginToEvaluation(){
    const loginButton = document.querySelector('.button-login-form');
    loginButton.addEventListener('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        redirectToNewEvaluation();
        redirectToLogin();

    });
}

window.addEventListener('load' ,function () {
    const app = document.querySelector('#app'); 
    app.innerHTML = Login();
    redirectLoginToEvaluation();   
    const btn = document.getElementById('btn');
    
    
});