setInterval(function(){
    let d = new Date;
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
        
    if(seconds < 10){
        seconds = `0${seconds}`
    } 
    if(minutes < 10){
        minutes = `0${minutes}`
    } 
    if(hours < 10){
        hours = `0${hours}`
    } 
    document.querySelector('.clock').innerHTML = `${hours}:${minutes}:${seconds}`
},1000)


let ms = 0
let sec = 0
let min = 0
let hour = 0
let count = 0
document.querySelector('.numers').innerHTML = `0${hour}:0${min}:0${sec}:00${ms}`
document.querySelector('.start').addEventListener('click',function(){
    count++
    console.log(count)
    let int = setInterval(function(){
        ms++      
       
        if(ms>99){
            sec++
            ms = 0
            
            if(sec>59){
                min++
                sec = 0
                
                if(min>59){
                    hour++
                    min = 0
                    
                }
            }
        }

        document.querySelector('.numers').innerHTML = `0${hour}:0${min}:${sec}:${ms}`
        
    },10)
    

    document.querySelector('.stop').addEventListener('click',function(){
        clearInterval(int)
    })
    
    document.querySelector('.loops').addEventListener('click',function(){
        let loop = document.querySelector('.numers').innerHTML
        document.querySelector('.loop').innerHTML += `   ${loop}`
    })
    let ms1 = 0
    let sec1 = 0
    let min1 = 0
    let hour1 = 0
    document.querySelector('.reset').addEventListener('click',function(){
        ms = ms1
        sec = sec1
        min = min1
        hour = hour1
        document.querySelector('.numers').innerHTML = `0${hour}:0${min}:0${sec}:00${ms}`
        
    })
    
})

let minsTimer = 0
let secTimer = 0
document.querySelector('.timerOn').innerHTML = '00:00'
document.querySelector('.minutes').innerHTML = `0${minsTimer}:0${secTimer}`
document.querySelector('.plus').addEventListener('click',function(){
    var resultMins = minsTimer++
    if(minsTimer<10){
    document.querySelector('.minutes').innerHTML = `0${minsTimer}:0${secTimer}`
} else {document.querySelector('.minutes').innerHTML = `${minsTimer}:0${secTimer}`}



document.querySelector('.minus').addEventListener('click',function(){
    if(minsTimer > 0){
        minsTimer--
    }
    
    if(minsTimer<10){
    document.querySelector('.minutes').innerHTML = `0${minsTimer}:0${secTimer}`
    } else {document.querySelector('.minutes').innerHTML = `${minsTimer}:0${secTimer}`}
})



let minsTimerOn = resultMins
let secTimerOn 
document.querySelector('.startT').addEventListener('click',function(){
    
    
    secTimerOn = 60
    let timeInt = setInterval(function(){
        
        secTimerOn--
        if(minsTimerOn<10 && secTimerOn<10){
            document.querySelector('.timerOn').innerHTML = `0${minsTimerOn}:0${secTimerOn}`
        } else {
            document.querySelector('.timerOn').innerHTML = `${minsTimerOn}:${secTimerOn}`
        }
        if(secTimerOn ==0 && minsTimerOn>0){
            minsTimerOn--
            secTimerOn = 60
            if(secTimerOn == 0 && minsTimerOn == 0){
                clearInterval(timeInt)
            }
        } 
        
        
    },1000)
    document.querySelector('.stopT').addEventListener('click',function(){
        clearInterval(timeInt)
    })

    document.querySelector('.resetT').addEventListener('click',function(){
        clearInterval(timeInt)
        document.querySelector('.timerOn').innerHTML = '00:00'
    })
    


})
})


