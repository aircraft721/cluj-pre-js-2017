(function(){
    window.dataStorage = new LocalStorageWrapper();

    const app = document.getElementById('app');

    const Manager = new Setup();
    const isLogged = function(){
        return !!window.dataStorage.get('userData');
    }

    const evaluation = function(){
        return EvaluationsPage();
    }

    const newEvaluation = function(){
        return NewEvaluationPage();
    }

    const build = function(){
        const component = Manager.app({
            isLogged : isLogged(),
        });

        app.innerHTML = component.view.render;
        if(component.setupEvents !== undefined){
            component.setupEvents.initEvents(build);
        }
    }
    build();

})();
