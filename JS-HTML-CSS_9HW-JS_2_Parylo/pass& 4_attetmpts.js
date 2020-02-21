
let sproby = 4;
while(sproby!=0){

let  parol = prompt(`Будь ласка введіть свій пароль. У вас залишилось спроб: ${sproby}`);
   
    if(parol == 'LasVegas50'){
        sproby = 0;
        alert('Вітаємо вас')
    }
    
    else{
        sproby--
        
        if(sproby==0){
            alert('Кількість спроб перевищена.Спробуйте пізніше')
        }        
    }   
}
