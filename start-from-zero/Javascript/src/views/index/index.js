
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
        var form = document.getElementById('form-new');

        btn.addEventListener('click',function(){
            function User(username,password,date,checkbox,textarea,select){
            this.username = username;
            this.password = password;
            this.date = date;
            this.checkbox = checkbox
            this.textarea= textarea;
            this.select = select;
            }

            const username = document.getElementById('username-id').value;
            const password = document.getElementById('password-id').value;
            const calendar = document.getElementById('calendar-id').value;
            const checkbox = document.querySelectorAll('.input-checkbox');
            const textarea = document.querySelectorAll('textarea');
            const select = document.querySelectorAll('select');
            const option = document.querySelectorAll('option');

            const textareaArr = [];
            textarea.forEach(element => {
                textareaArr.push(element.value);
            })

            const selectArr = [];
            select.forEach(element => {
                selectArr.push(element.value);
            })

            const checkboxArr = [];
            checkbox.forEach(element => {
                if(element.checked === true){
                    checkboxArr.push(element.value + ' ' + element.checked)
                }else{
                    checkboxArr.push(element.checked);
                }
            })
            
            const userObj = new User(username,password,calendar,checkboxArr,textareaArr,selectArr);
            const x = JSON.stringify(userObj);
            const y = JSON.parse(x);
            console.log(y);
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
    
    
    
});