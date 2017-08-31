function FormData(){
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
                radioArr.push(element.value)
            }else{
                radioArr.push();
            }
        })

        const radioString = radioArr.toString();
    
        const userObj = new User(username,calendar,radioString,textarea,select);
        //const userObj2 = new User(username,calendar,radioString,textareaArr,select);
        
        localStorage.setItem('userObj',JSON.stringify(userObj));
        const retrieveObject = localStorage.getItem('userObj');
        
        let parsedObject = JSON.parse(retrieveObject);     
        })
}