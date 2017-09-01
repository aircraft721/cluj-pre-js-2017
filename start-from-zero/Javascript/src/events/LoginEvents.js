const LoginEvents = function(){
    this.initEvents = function(build){
        const form = document.getElementById('login-form');
        form.addEventListener('submit',function(e){
            e.preventDefault();
            const userData = {};

            Array.prototype.forEach.call(form.children,function(item){
                if(item.name){
                    userData[item.name] = item.value;
                }
            });

            window.dataStorage.set('userData',userData);
            build(false,true);
        })
    }
}