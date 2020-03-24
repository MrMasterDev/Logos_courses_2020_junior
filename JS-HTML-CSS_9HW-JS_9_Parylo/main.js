$(function(){
    let Ball = setInterval(function(){
        let rrBall = Math.floor(Math.random()*255);
        let ggBall = Math.floor(Math.random()*255);
        let bbBall = Math.floor(Math.random()*255);
        let rrBorder = Math.floor(Math.random()*255);
        let ggBorder = Math.floor(Math.random()*255);
        let bbBorder = Math.floor(Math.random()*255);
        $('.ball').animate({
           top: Math.floor(Math.random()*800) + 'px',
           left: Math.floor(Math.random()*1200) + 'px',
        },1000);
        $('.ball').css({
           backgroundColor: `rgb(${rrBall},${ggBall},${bbBall})`,
           borderColor: `rgb(${rrBorder},${ggBorder},${bbBorder})`,
           
        });
    },2000)

})