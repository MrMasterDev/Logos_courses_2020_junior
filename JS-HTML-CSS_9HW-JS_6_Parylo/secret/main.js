let getId = id => document.getElementById(id);

let getSel = sell => document.querySelector(sell);

let tx1 = document.querySelector('.text1')
let tx2 = document.querySelector('.text2')
let tx3 = document.querySelector('.text3')

let countMouse = 0
getSel('.colors').addEventListener('mouseover', function () {
    if (countMouse === 0) {
        this.style.backgroundColor = 'yellow';
        tx1.style.display = 'none';
        tx2.style.display = 'block';
        tx2.style.color = 'black';
    }
})

getSel('.colors').addEventListener('mousedown', function () {
        this.style.backgroundColor = 'red';
        tx1.style.display = 'none';
        tx2.style.display = 'none';
        tx3.style.display = 'block';
        tx3.style.color = 'yellow';
})
getSel('.colors').addEventListener('mouseup', function () {
        this.style.backgroundColor = 'yellow';
        tx2.style.display = 'block';
        tx3.style.display = 'none';
        tx1.style.display = 'none';
})

getSel('.colors').addEventListener('mouseout', function () {
    this.style.backgroundColor = 'black';
    tx1.style.display = 'block';
    tx2.style.display = 'none';
    tx3.style.display = 'none';
})