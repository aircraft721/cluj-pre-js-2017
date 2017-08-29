function FormData(){
    btn.addEventListener('click',function(){
        function User(username,password,date,radio,textarea,select){
        this.username = username;
        this.password = password;
        this.date = date;
        this.radio = radio;
        this.textarea = textarea;
        this.select = select.forEach(element=>{
            this[element.name] = element.value;
        })
        }
    
        const username = document.getElementById('username-id').value;
        const password = document.getElementById('password-id').value;
        const calendar = document.getElementById('calendar-id').value;
        const checkbox = document.querySelectorAll('.input-checkbox');
        const textarea = document.querySelectorAll('textarea');
        const legend = document.querySelectorAll('legend');
        const select = document.querySelectorAll('select');
        
    
        const textareaArr = [];
        textarea.forEach(element => {
            textareaArr.push(element.value);
        })
    
    
        const radioArr = [];
        checkbox.forEach(element => {
            if(element.checked === true){
                radioArr.push(element.value)
            }else{
                radioArr.push();
            }
        })
        
        const radioString = radioArr.toString();
    
        const userObj = new User(username,password,calendar,radioString,textareaArr,select);
        
        localStorage.setItem('userObj',JSON.stringify(userObj));
        const retrieveObject = localStorage.getItem('userObj');
        
        console.log(JSON.parse(retrieveObject));
        })
}