(function(){
    window.dataStorage = new LocalStorageWrapper();

    const app = document.getElementById('app');

    const Manager = new Setup();
    const isLogged = function(){
        return !!window.dataStorage.get('userData');
    }

    const build = function(newEvaluationCheck, evaluationCheck){
        const component = Manager.app({
            isLogged : isLogged(),
            isNewEvaluationPage: newEvaluationCheck,
            newEvaluationCheck: evaluationCheck,
        });

        app.innerHTML = component.view.render;
        if(component.setupEvents !== undefined){
            component.setupEvents.initEvents(build);
        }
    }
    build();

})();
