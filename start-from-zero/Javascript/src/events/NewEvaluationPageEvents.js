const NewEvaluationPageEvents = function() {
    this.initEvents = function(build) {
        FormData();
        const logoutBtn = document.querySelector('.link-logout');
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            window.dataStorage.remove('userData');
            build(newEvaluationCheck = false, evaluationCheck = false);
        });

        const evaluations = document.querySelector('.evaluations-page');
        evaluations.addEventListener('click',function(e){
            e.preventDefault();
            build(newEvaluationCheck = false, evaluationCheck = true)
        })
    }
}