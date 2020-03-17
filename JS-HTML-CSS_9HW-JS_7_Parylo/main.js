let getId = id => document.getElementById(id);

let getSel = sell => document.querySelector(sell);

let boxColors = document.box_colors;
let imgBg = document.color_buttons.text_color;
let colorBg = document.color_buttons.background_color;


function bgBoxColors() {
    for (let i = 0; i < document.box_colors.children.length; i++) {

        document.box_colors.children[i].style.backgroundColor = document.box_colors.elements[i].value;

    }
}

function bgImg() {
    for (let i = 0; i < document.box_colors.children.length; i++) {

        document.box_colors.children[i].style.background = `url(${arrImg[i]})`;

    }
}


colorBg.addEventListener('click', function () {

    if (boxColors.className == 'box_color hide') {
        boxColors.classList.remove('hide')
        boxColors.classList.add('show')

        for (let i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.children[i].style.background = ``;
            bgBoxColors()
            document.box_colors.children[i].onclick = function () {
                document.body.style.background = ''
                document.body.style.backgroundColor = document.box_colors.elements[i].value;
                boxColors.classList.remove('show')
                boxColors.classList.add('hide')
            }
        }
    }

})

let arrImg = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/1.jpg']   
imgBg.addEventListener('click', function () {
    bgImg()
    if (boxColors.className == 'box_color hide') {
        boxColors.classList.remove('hide')
        boxColors.classList.add('show')

        for (let i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.children[i].onclick = function () {
                document.body.style.background = `url(${arrImg[i]})`;
                boxColors.classList.remove('show')
                boxColors.classList.add('hide')
            }
        }
    }

})
