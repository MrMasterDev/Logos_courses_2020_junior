let quizOne = +prompt('10x11');
let quizTwo = +prompt('20x25');
let quizThree = +prompt('корінь з 9');
let quizFour = +prompt('12 в степені 2');
let quizFive = +prompt('25 в 2 степені');
let quizSix = +prompt('sin 30 градусів');
let quizSeven = +prompt('1250-350');
let quizEight = +prompt('125/5');
let quizNine = +prompt('130/5');
let quizTen = +prompt('Число Пі');
let rezult = 0;

if(quizOne == 111){
    rezult++
} 
if(quizTwo == 500){
    rezult++
} 
if(quizThree == 3){
    rezult++
} 
if(quizFour == 144){
    rezult++
} 
if(quizFive == 625){
    rezult++
} 
if(quizSix == 0.5){
    rezult++
} 
if(quizSeven == 900){
    rezult++
} 
if(quizEight == 25){
    rezult++
} 
if(quizNine == 26){
    rezult++
} 
if(quizTen == 3.14){
    rezult++
} 

alert('Ваш результат    '+rezult);
if(rezult < 3){
    alert('Ваш рівень знань слабкий.')
} else if(rezult <= 5){
    alert('Ваш рівень знань середній.Не завадить трохи практики.')
} else if(rezult >5 < 10){
    alert('Ваш рівень знань досить високий.')
} else if(rezult==10){
    alert('Ваш рівеь знань відмінний!')
}
