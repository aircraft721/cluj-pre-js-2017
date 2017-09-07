(function(){
    windowObjectWrap.EvaluationPageEvents = function() {
        this.initEvents = function(build) {
            
            const toggle = document.querySelectorAll('.plus-button');
            //console.log(toggle);
            for(var detailsButton of toggle){
                detailsButton.addEventListener('click',function(e){
                    e.preventDefault();
                    const accordion = document.getElementById('accordion');
                    accordion.classList.toggle('hidethis');
                });
            }

            // const plusButtons = document.querySelectorAll('.details-button');
            
            //     const detailsListener = function (e) {
            //         interviewApp.Modules.NewModule.init(e.target.dataset.id);
            //     };
            
            //     const addEventsEvaluations = function () {
            //         newEvaluationButton.addEventListener('click', newButtonListener);
            //         plusButtons.forEach((el) => {
            //             el.addEventListener('click', detailsListener);
            //         });
            //     };
            
    
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
