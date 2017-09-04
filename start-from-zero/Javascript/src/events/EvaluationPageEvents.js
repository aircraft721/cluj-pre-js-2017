const EvaluationPageEvents = function() {
    this.initEvents = function(build) {

        //function for accordion
        const toggle = document.querySelectorAll('.plus-button');
        for(var plus of toggle){
            console.log(plus);
            plus.addEventListener('click',function(e){
                e.preventDefault();
                const accordion = document.getElementById('accordion');
                accordion.classList.toggle('hidethis');
            });
        }

        //console.log(detailsElements);

        // for(let i = 0; i < toggle.length; i++){
        //     console.log(toggle[i]);
        //     for(let o = 0; o < detailsElements.length; o++){
        //         toggle[i].addEventListener('click',function(e){
        //             const accordion = document.getElementById('accordion');
        //             accordion.classList.toggle('hidethis');
        //         })
        //     }
        // }

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