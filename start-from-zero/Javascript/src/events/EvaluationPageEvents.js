const EvaluationPageEvents = function() {
    this.initEvents = function(build) {

        const logoutBtn = document.querySelector('.link-logout');
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.dataStorage.remove('userData');
            build(newEvaluationCheck = false, evaluationCheck = false);
        });

        const newEvaluations = document.querySelector('.new-evaluations-page');
        newEvaluations.addEventListener('click',function(e){
            e.preventDefault();
            build(newEvaluationCheck = true, evaluationCheck = false);
        })
    }
}