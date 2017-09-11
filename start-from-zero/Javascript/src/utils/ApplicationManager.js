const windowObjectWrap = {};
const Setup = function(){
    Setup.prototype.app = function(options) {
        if(options.isLogged === false){
            return {
                view: new windowObjectWrap.Login(),
                setupEvents: new windowObjectWrap.LoginEvents()
            }
        }

        if(options.isNewEvaluationPage === true){
            return {
                view: new windowObjectWrap.NewEvaluationPage(),
                setupEvents: new windowObjectWrap.NewEvaluationPageEvents()
            }
        }
        
            return {
                view: new windowObjectWrap.EvaluationsPage(),
                setupEvents: new windowObjectWrap.EvaluationPageEvents()
        }
    }
}   