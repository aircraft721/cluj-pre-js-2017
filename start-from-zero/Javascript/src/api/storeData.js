function FormData(){
    btn.addEventListener('click',function(){
        function User(username,password,date,checkbox,textarea,legend){
        this.username = username;
        this.password = password;
        this.date = date;
        this.checkbox = checkbox
        this.textarea = textarea;
        this.legend = legend;
        //this.select = select;
        }
    
        const username = document.getElementById('username-id').value;
        const password = document.getElementById('password-id').value;
        const calendar = document.getElementById('calendar-id').value;
        const checkbox = document.querySelectorAll('.input-checkbox');
        const textarea = document.querySelectorAll('textarea');
        const legend = document.querySelectorAll('legend');
        //const select = document.querySelectorAll('select');
        
    
        const textareaArr = [];
        textarea.forEach(element => {
            textareaArr.push(element.value);
        })
    
        const nodelist1 = [...document.querySelectorAll('select')];
        nodelist1.map(n => {
            
        })
        console.log(nodelist1);
        

        // const selectArr = [];
        // select.forEach(element => {
        //     selectArr.push(element.value);
        // })
    
        const checkboxArr = [];
        checkbox.forEach(element => {
            if(element.checked === true){
                checkboxArr.push(element.value)
            }else{
                checkboxArr.push();
            }
        })
        const checkString = checkboxArr.toString();
    
        const legendArr = [];
        legend.forEach(element => {
            legendArr.push(element.innerHTML);
        })
    
        const userObj = new User(username,password,calendar,checkString,textareaArr,legendArr);
        
        localStorage.setItem('userObj',JSON.stringify(userObj));
        const retrieveObject = localStorage.getItem('userObj');
        
        console.log(JSON.parse(retrieveObject));
        })
}