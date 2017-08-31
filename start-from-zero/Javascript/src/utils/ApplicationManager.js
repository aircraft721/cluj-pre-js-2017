const Setup = function(){
    Setup.prototype.app = function(options) {
        if(options.isLogged === false){
            return {
                view: new Login(),
                setupEvents: new LoginEvents()
            }
        }

        if(options.isLogged === true){
            return {
                view: new EvaluationsPage(),
                setupEvents: new EvaluationPageEvents()
            }
        }
        

        
    }
}   