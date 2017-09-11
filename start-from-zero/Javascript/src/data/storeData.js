(function(){
    windowObjectWrap.FormData = function(){
        btn.addEventListener('click',function(){
            function User(username,date,radio,id){
            this.username = username;
            this.date = date;
            this.radio = radio;
            textarea.forEach(element=>{
                this[element.name] = element.value;
            });
            select.forEach(element=>{
                this[element.name] = element.value;
            });
            this.id = (this.username + new Date().getTime()).replace(/ /g, '').toLowerCase();
            }
            
            
    
            const username = document.getElementById('username-id').value;
            const calendar = document.getElementById('calendar-id').value;
            const checkbox = document.querySelectorAll('.input-checkbox');
            const textarea = document.querySelectorAll('textarea');
            const legend = document.querySelectorAll('legend');
            const select = document.querySelectorAll('select');
            
        
            const radioArr = [];
            checkbox.forEach(element => {
                if(element.checked === true){
                    radioArr.push(element.value);
                }
            })
    
            const radioString = radioArr.toString();
        
            const userObj = new User(username,calendar,radioString);
            
            const localStorageLength = localStorage.length;
            var localArr = [];
            if(localStorageLength !== 1){
                localArr = JSON.parse(localStorage.getItem("localArr"));
            }
            localArr.push(userObj);
    
            localStorage.setItem('localArr',JSON.stringify(localArr));
            const retrieveObject = localStorage.getItem('localArr');
            
            let parsedObject = JSON.parse(retrieveObject);    
            })
    }
})();
