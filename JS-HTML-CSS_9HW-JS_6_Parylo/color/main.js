let getId = id => document.getElementById(id);

let getSel = sell => document.querySelector(sell);

let countMouse = 0
getSel('.colors').addEventListener('mouseover', function () {
    if (countMouse === 0) {
        this.style.backgroundColor = 'red';
        countMouse++
    } else if (countMouse === 1) {
        this.style.backgroundColor = 'orange';
        countMouse++
    } else {
        this.style.backgroundColor = 'yellow';
        countMouse = 0;
    }

})

getSel('.colors').addEventListener('mouseout', function () {
    this.style.backgroundColor = '';
})