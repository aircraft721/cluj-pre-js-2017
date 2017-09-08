(function(){
    windowObjectWrap.EvaluationPageEvents = function() {
        this.initEvents = function(build) {
            
            const toggle = document.querySelectorAll('.plus-button');
            for(var detailsButton of toggle){
                detailsButton.addEventListener('click',function(e){
                    e.preventDefault();
                    var displayData = e.target.parentNode.parentNode.parentNode.dataset;
                    
                    console.log(displayData);
                    const accordion = document.getElementById('accordion');
                    accordion.classList.toggle('hidethis');
                });
            }

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
})();
