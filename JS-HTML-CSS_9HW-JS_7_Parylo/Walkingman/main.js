let getSel = sell => document.querySelector(sell);

let img = getSel('img');
img.style.position = 'absolute';

document.buttons_move.addEventListener('click', function (event) {
    console.log('action:', event)

    if (event.toElement.name == 'left') {
        let Left = img.offsetLeft;
        img.style.transform = 'rotate(-90deg)'
        if (Left > 0) {
            img.style.left = Left - 10 + 'px'
        }

    }
    if (event.toElement.name == 'up') {
        img.style.transform = 'rotate(0)'
        let Up = img.offsetTop;
        if (Up > 0) {
            img.style.top = Up - 10 + 'px'
        }
    }
    if (event.toElement.name == 'right') {
        img.style.transform = 'rotate(90deg)'
        let Right = getSel('img').offsetLeft;

        if (Right < window.innerWidth - 110) {
            img.style.left = Right + 10 + 'px'
        }

    }
    if (event.toElement.name == 'down') {
        img.style.transform = 'rotate(-180deg)'
        let goTop = img.offsetTop;
        if (goTop < window.innerHeight - 110) {
            img.style.top = goTop + 10 + 'px'
        }
    }
})