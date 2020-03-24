let regName = /^[a-zA-Z][^#&<>\"~;$^%{}?][^0-9]{1,20}$/ 
let regName1 = /^[a-zA-Z0-9][^#&<>\"~;$^%{}?]{8,20}$/ 
let regName2 = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ 
let regExp3 = /^[0-9\-\+]{9,16}$/
    let f1 = document.forms['f1']
    let firstName = document.querySelector('#firstName')
    let f2 = document.querySelector('.button')
    f2.addEventListener('click', function(){
        if(regName.test(firstName.value) != true){
            firstName.style.border = `5px solid red`
            firstName.style.boxShadow = '0px 0px 15px 0px red';
            document.querySelector('.ok').style.display = 'none'
            document.querySelector('.wrong  ').style.display = 'block'
            document.querySelector('.validmessage1').style.display = 'block'
        }
        else if(regName.test(firstName.value) == true){
            firstName.style.border = `5px solid green`
            firstName.style.boxShadow = '0px 0px 15px 0px green';
            document.querySelector('.ok').style.display = 'block'
            document.querySelector('.wrong').style.display = 'none'
            document.querySelector('.validmessage1').style.display = 'none'
        }
        if(regName.test(lastName.value) != true){
            lastName.style.border = `5px solid red`
            lastName.style.boxShadow = '0px 0px 15px 0px red';
            document.querySelector('.ok2').style.display = 'none'
            document.querySelector('.wrong2').style.display = 'block'
            document.querySelector('.validmessage2').style.display = 'block'
        }
        else if(regName.test(lastName.value) == true){
            lastName.style.border = `5px solid green`
            lastName.style.boxShadow = '0px 0px 15px 0px green';
            document.querySelector('.ok2').style.display = 'block'
            document.querySelector('.wrong2').style.display = 'none'
            document.querySelector('.validmessage2').style.display = 'none'
        }
        if(regName2.test(email.value) != true){
            email.style.border = `5px solid red`
            email.style.boxShadow = '0px 0px 15px 0px red';
            document.querySelector('.ok3').style.display = 'none'
            document.querySelector('.wrong3').style.display = 'block'
            document.querySelector('.validmessage3').style.display = 'block'
        }
        else if(regName2.test(email.value) == true){
            email.style.border = `5px solid green`
            email.style.boxShadow = '0px 0px 15px 0px green';
            document.querySelector('.ok3').style.display = 'block'
            document.querySelector('.wrong3').style.display = 'none'
            document.querySelector('.validmessage3').style.display = 'none'
        }
        if(regExp3.test(phone_number.value) != true){
            phone_number.style.border = `5px solid red`
            phone_number.style.boxShadow = '0px 0px 15px 0px red';
            document.querySelector('.ok4').style.display = 'none'
            document.querySelector('.wrong4').style.display = 'block'
            document.querySelector('.validmessage4').style.display = 'block'
        }
        else if(regExp3.test(phone_number.value) == true){
            phone_number.style.border = `5px solid green`
            phone_number.style.boxShadow = '0px 0px 15px 0px green';
            document.querySelector('.ok4').style.display = 'block'
            document.querySelector('.wrong4').style.display = 'none'
            document.querySelector('.validmessage4').style.display = 'none'
        }
        if(regName1.test(password.value) != true){
            password.style.border = `5px solid red`
            password.style.boxShadow = '0px 0px 15px 0px red';
            document.querySelector('.ok5').style.display = 'none'
            document.querySelector('.wrong5').style.display = 'block'
            document.querySelector('.validmessage5').style.display = 'block'
        }
        else if(regName1.test(password.value) == true){
            password.style.border = `5px solid green`
            password.style.boxShadow = '0px 0px 15px 0px green';
            document.querySelector('.ok5').style.display = 'block'
            document.querySelector('.wrong5').style.display = 'none'
            document.querySelector('.validmessage5').style.display = 'none'
        }
        if(regExp3.test(phone_number.value)==true&&regName.test(firstName.value)==true&&regName.test(lastName.value)==true&&regName2.test(email.value) == true&&regName1.test(password.value)==true){
            document.querySelector('.form').style.display = 'none'
            document.querySelector('.title').style.display = 'none'
       
            
            
        }
        if(regExp3.test(phone_number.value)==true&&regName.test(firstName.value)==true&&regName.test(lastName.value)==true&&regName2.test(email.value) == true&&regName1.test(password.value)==true){
            $(function(){
                 
                    $('.success').fadeIn().animate({
                        display: 'block'
                    },4000)
                });
            
        }
    })


    