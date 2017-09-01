const LocalStorageWrapper = function(){
    this.set = function(key,val){
       localStorage.setItem(key,JSON.stringify(val)); 
    }

    this.remove = function(key){
        localStorage.removeItem(key);
    }

    this.get = function(key){
        return JSON.parse(localStorage.getItem(key));
    }
}