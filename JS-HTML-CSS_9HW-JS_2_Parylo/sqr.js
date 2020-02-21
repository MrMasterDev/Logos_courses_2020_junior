let num = prompt('Write your number');
let sqr = prompt('Write your step');
let res = 1;
if(sqr>0){
    for(let x = 1; x<=sqr; x++){
    res = res * num  
    }
}
else if(sqr==0){
    res = 1;
}
else{
    sqr = -sqr;
    for(let x = 1; x<=sqr; x++){
        res = res * num  
    }
    res = 1/res;
}
console.log(res)