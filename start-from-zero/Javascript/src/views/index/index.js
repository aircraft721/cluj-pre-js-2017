
function redirectToEvaluation(){
    const evaluations= document.querySelector('.evaluations-page');
    evaluations.addEventListener('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        app.innerHTML = EvaluationsPage();
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
        redirectToEvaluation();
        const btn = document.getElementById('btn');
        FormData();
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
    const loginButton = document.getElementById('login-btn');
    LoginData();
    loginButton.addEventListener('click',function(e){
        e.preventDefault();
        redirectToNewEvaluation();
    });
}


const app = document.querySelector('#app'); 
app.innerHTML = Login();

redirectLoginToEvaluation();   
