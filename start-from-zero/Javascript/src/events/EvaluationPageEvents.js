(function(){
    windowObjectWrap.EvaluationPageEvents = function() {
        this.initEvents = function(build) {
            const toggle = document.querySelectorAll('.plus-button');
            for(var detailsButton of toggle){
                detailsButton.addEventListener('click',function(e){
                    e.preventDefault();
                    const displayData = e.target.parentNode.parentNode.parentNode.dataset.id;
                    const elem = document.querySelector(`div[data-id="${displayData}"]`)
                    elem.classList.toggle('hidethis');
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
