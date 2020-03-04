let f1 = document.forms['f1']
let edit = document.querySelector('.edit')
let n = document.querySelector('.add')
let m = document.querySelector('.save')


document.querySelector('.edit').onclick = function(){
    f1.style.display = 'block'
    f2.style.display = 'none'
    n.style.display = 'block'
    m.style.display = 'block'
    document.querySelector('.area').style.display = 'block  '
    document.querySelector('#area').value = document.querySelector('.box').innerHTML
}

document.querySelector('#save').addEventListener('click', function () {
    document.querySelector('.area').style.display = 'none'
    document.querySelector('.box').innerHTML = document.querySelector('#area').value
    f1.style.display = 'none'
    f2.style.display = 'none'
})

let f2 = document.forms['f2']
let style = document.querySelector('.style')

style.addEventListener('click', function () {
    f2.style.display = 'block'
    f1.style.display = 'none'
})

let f4 = document.querySelector('.box')
let f8 = document.querySelector('.radiobox')

for (let i = 0; i < f8.children.length; i++) {
    f8.children[i].addEventListener('click', function () {
        f4.style.fontSize = this.value
    })
}

let it = document.querySelector('.checkbox2')
let bl = document.querySelector('.checkbox1')
it.addEventListener('click', function () {
    if (it.checked) {
        f4.style.fontStyle = this.value
    }
    else {
        f4.style.fontStyle = ''
    }
})
bl.addEventListener('click', function () {
    if (bl.checked) {
        f4.style.fontWeight = this.value
    }
    else {
        f4.style.fontWeight = ''
    }
})

let fm = document.querySelector('.styles')

fm.addEventListener('change', function () {

    for (let i = 0; i < fm.options.length; i++) {
        if (fm.options[i].selected) {
            f4.style.fontFamily = this.value
        }
    }
})

let fr = document.querySelector('.textcolor')
let fg = document.querySelector('.bgcolor')
let fd = document.querySelector('.colors')
let fl = document.querySelector('.colors1')

fr.addEventListener('click', function () {
    fd.style.display = 'block'
    fl.style.display = 'none'
})

fg.addEventListener('click', function () {
    fl.style.display = 'block'
    fd.style.display = 'none'
})

for (let i = 0; i < fd.children.length; i++) {
    fd.children[i].addEventListener('click', function ()  {
        f4.style.color = this.value
        fd.style.display = 'none'

    })
}

for (let i = 0; i < fl.children.length; i++) {
    fl.children[i].addEventListener('click', function ()  {
        f4.style.backgroundColor = this.value
        fl.style.display = 'none'

    })
}


let cr = document.querySelector('.createt')
let add = document.querySelector('.add')
let btn2 = document.querySelector('.btn1')

add.addEventListener('click', function () {
    cr.style.display = 'block'
    f4.style.display = 'none'
    f1.style.display = 'none'
    f2.style.display = 'none'
    // btn2.style.display = 'none'
})

let tb = document.querySelector('#create1')
let ts = document.querySelector('#create2')
let form3 = document.forms['f3']
let form4 = document.forms['f4']

tb.addEventListener('click', function() {
    form3.style.display = 'block'
    form4.style.display = 'none'
})

let btn = document.querySelector('.ctb')

btn.addEventListener('click', function() {
    
    let CountTD = document.querySelector('.countof_TD');
    let CountTR = document.querySelector('.countof_TR');
    let WidthTD = document.querySelector('.width_TD');
    let HeighTD = document.querySelector('.height_TD');
    let WidthBorder = document.querySelector('.width_BD');
    let typeBorder = document.querySelector('.bdtype');
    let colorBorder = document.querySelector('.bdcolor');
    td = '';
    tr = '';
    str = '';
    for (let i = 0; i < Number(CountTR.value); i++) {
        for (let j = 0; j < Number(CountTD.value); j++) {
            td += `<td style='width: ${WidthTD.value}px; height: ${HeighTD.value}px; border: 
            ${WidthBorder.value}px ${typeBorder.value} ${colorBorder.value}'> tr </td>`;
        }
    tr += '<tr>' + td + '</tr>';
    td = ``;
    }
    str = '<table>' + tr + '</table>';
    
    document.querySelector('#area').value = document.querySelector('#area').value+str;
    cr.style.display = 'none'
    f4.style.display = 'block'
    f1.style.display = 'block'
    
})

ts.addEventListener('click', function() {
    form3.style.display = 'none'
    form4.style.display = 'block'
})


document.querySelector('.cls').addEventListener('click', function() {
   

    let CountLi = document.querySelector('.countof_Li');
    let select2 = document.querySelector('.type_marks');

    Li = '';
    str2 = '';
    for (let z = 0; z < Number(CountLi.value); z++) {
        Li += '<li>Item</li>';
    }

    str2 = `<ul style = 'listStyleImage: ${select2.value}'>` + Li + `</ul>`;
    console.log(str2);
    document.querySelector('#area').value = document.querySelector('#area').value + str2;
    cr.style.display = 'none'
    f4.style.display = 'block'
    f1.style.display = 'block'
    
})