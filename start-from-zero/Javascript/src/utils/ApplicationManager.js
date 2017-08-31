const Setup = function(){
    Setup.prototype.app = function(options) {
        if(options.isLogged === false){
            return {
                view: new Login(),
                setupEvents: new LoginEvents()
            }
        }

        if(options.isNewEvaluationPage === true){
            return {
                view: new NewEvaluationPage(),
                setupEvents: new NewEvaluationPageEvents()
            }
        }
        
            return {
                view: new EvaluationsPage(),
                setupEvents: new EvaluationPageEvents()
        }
        
    }
}   