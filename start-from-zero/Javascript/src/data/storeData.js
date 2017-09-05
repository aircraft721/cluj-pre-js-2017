windowObjectWrap.FormData = function(){
    btn.addEventListener('click',function(){
        function User(username,date,radio,textarea,select){
        this.username = username;
        this.date = date;
        this.radio = radio;
        this.textarea = textarea.forEach(element=>{
            this[element.name] = element.value;
        });
        this.select = select.forEach(element=>{
            this[element.name] = element.value;
        })
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
    
        const userObj = new User(username,calendar,radioString,textarea,select);
        
        const localStorageLength = localStorage.length;
        let localArr = [];
        if(localStorageLength !== 0){
            localArr = JSON.parse(localStorage.getItem("localArr"));
        }
        localArr.push(userObj);


        localStorage.setItem('localArr',JSON.stringify(localArr));
        const retrieveObject = localStorage.getItem('localArr');
        
        let parsedObject = JSON.parse(retrieveObject);    
        console.log(parsedObject);
        })
}