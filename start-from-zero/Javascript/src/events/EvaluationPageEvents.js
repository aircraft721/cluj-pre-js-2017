const EvaluationPageEvents = function() {
    this.initEvents = function(build) {

        const newEvaluations = document.querySelector('.new-evaluations-page');
        newEvaluations.addEventListener('click',function(e){
            
        })
        
        const button = document.querySelector('.link-logout');
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            window.dataStorage.remove('userData');
            build();
        });
    }
}