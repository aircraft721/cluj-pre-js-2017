
window.onload = function () {
    const d = document.querySelector('#app');
    d.innerHTML = LoginPage();
    
    const newEvaluationsPage = document.querySelector('.new-evaluations-page');
    
    newEvaluationsPage.addEventListener('click',function(e){
        app.innerHTML = NewEvaluationPageAll();
        
        e.preventDefault();
    });

    const evaluationsPage = document.querySelector('.evaluations-page');
    evaluationsPage.addEventListener('click',function(e){
        app.innerHTML = EvaluationsPage();
        e.preventDefault();
    });

    const login = document.querySelector('.image');
    login.addEventListener('click',function(e){
        app.innerHTML = LoginPage();
        e.preventDefault();
    });

};
