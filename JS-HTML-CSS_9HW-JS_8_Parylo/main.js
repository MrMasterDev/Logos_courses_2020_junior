let data = new Date;
let querSr = x => document.querySelector(x)


let dbBox = querSr('.date');
let tbBox = querSr('.time');

let dbNum = data.getDate();
let dbMont = data.getMonth() + 1;
let dbYear = data.getFullYear();
if (dbNum < 10) dbNum = '0' + dbNum
if (dbMont < 10) dbMont = '0' + dbMont
dbBox.innerHTML = `<h3>${dbNum}. ${dbMont}. ${dbYear}</h3>`


function localTime() {
    let data = new Date;
    let tbH = data.getHours()
    let tbM = data.getMinutes()
    let tbS = data.getSeconds()
    if (tbH < 10) tbH = '0' + tbH;
    if (tbM < 10) tbM = '0' + tbM;
    if (tbS < 10) tbS = '0' + tbS;


    tbBox.innerHTML = `<h1>${tbH} : ${tbM} : ${tbS}</h1>`
}
setInterval(localTime, 1000);





let ms = '000';
let s = '00';
let min = '00';
let h = '000';
let stopWatchBox = querSr('.stopwatch')
stopWatchBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`

function stopWatch() {
 stopWatchBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
  
 ms++;
        if (ms < 10) {
            ms = '00' + ms
        } else if (ms < 100) {
            ms = '0' + ms
        }
        
        stopWatchBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
        if (ms === 100) {
            s++;
            if (s < 10) s ='0' + s;
            ms = 0;
            stopWatchBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
            if (s === 60) {
                min++;
                if (min < 10) min ='0' + min;
                s = 0;
                stopWatchBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
                if (min === 60) {
                    if (h < 10) h = '0'+ h
                    h++;

                    m = 0;
                    stopWatchBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
                }
            }
        }
        
        let  sW

}
let  sW
querSr('#start').addEventListener('click', function(){
    
     sW = setInterval(stopWatch, 10)
})
querSr('#stop').addEventListener('click', function(){
    clearInterval(sW)
})
querSr('#loop').addEventListener('click', function(){
    querSr('.loop').innerText =  stopWatchBox.innerText 
})
querSr('#reset').addEventListener('click', function(){
     ms = '000';
     s = '00';
     min = '00';
     h = '000';
     stopWatchBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
})
 