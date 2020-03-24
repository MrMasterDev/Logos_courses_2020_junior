let getSel = sell => document.querySelector(sell);

let result = document.querySelector('.box');

let bold = document.forms['font_style'].bold;
let cursive = document.forms['font_style'].italic;
let undrLine = document.forms['font_style'].underline;
let throughLine = document.forms['font_style'].line_through;


bold.addEventListener('click', function () {
    if (this.checked) {

        result.style.fontWeight = this.value;

    } else {
        result.style.fontWeight = '';

    }
})


cursive.addEventListener('click', function () {
    if (this.checked) {
        result.style.fontStyle = this.value;

    } else {
        result.style.fontStyle = '';

    }
})
undrLine.addEventListener('click', function () {
    if (this.checked) {
        result.style.textDecoration = this.value;

    } else {
        result.style.textDecoration = '';

    }
})
throughLine.addEventListener('click', function () {
    if (this.checked) {
        result.style.textDecoration = this.value;

    } else {
        result.style.textDecoration = '';

    }
})


document.text_align.addEventListener('click', function () {
    for (let i = 0; i < this.elements.length; i++) {

        if (this.elements[i].checked) {
            result.style.textAlign = this.elements[i].value;

        }
    }
})


document.font_family.addEventListener('click', function () {
    for (let i = 1; i < this.elements.length; i++) {

        this.elements[i].onclick = function () {
            result.style.fontFamily = this.value;

        }
    }
})

for (let i = 1; i < document.font_family.elements.length; i++) {

    document.font_family.elements[i].style.fontFamily = document.font_family.elements[i].value;

}


document.font_size.addEventListener('click', function () {
    for (let i = 1; i < this.elements.length; i++) {

        this.elements[i].onclick = function () {
            result.style.fontSize = this.value;

        }
    }
})

for (let i = 1; i < document.font_size.elements.length; i++) {

    document.font_size.elements[i].style.fontSize = document.font_size.elements[i].value;

}

let colorText = document.t_color.color;
let colorBg = document.bg.bg_color;
let bgimg = document.querySelectorAll('.bg_element')



function bgBoxColors() {
    for (let i = 0; i < document.box_colors.children.length; i++) {

        document.box_colors.children[i].style.backgroundColor = document.box_colors.elements[i].value;

    }
}
bgBoxColors()


colorText.addEventListener('click', function () {
    getSel('#staticBackdropLabel_2').style.display = 'block';

    for (let x = 0; x < bgimg.length; x++) {
        bgimg[x].style.display = 'none'
    }
    for (let i = 0; i < document.box_colors.elements.length; i++) {
        document.box_colors.children[i].onclick = function () {

            result.style.color = document.box_colors.elements[i].value;

        }
    }
})



let arrowImage = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/1.jpg']

function bgImg() {
    for (let x = 0; x < bgimg.length; x++) {
        bgimg[x].style.display = 'block'
    }
    for (let i = 0; i < document.box_img.children.length; i++) {

        document.box_img.children[i].style.background = `url(${arrowImage[i]})`;

    }
}


colorBg.addEventListener('click', function () {
    bgImg()

    getSel('#staticBackdropLabel_2').style.display = 'none';
 

    for (let i = 0; i < document.box_colors.elements.length; i++) {
        document.box_colors.children[i].onclick = function () {
            document.body.style.background = '';
            document.body.style.backgroundColor = document.box_colors.elements[i].value;

        }
    }

    for (let i = 0; i < document.box_img.children.length; i++) {
        document.box_img.children[i].onclick = function () {
            document.body.style.background = `url(${arrowImage[i]})`;

        }
    }

    document.querySelector("#inputGroupFile01").onchange = function () {
        let url = URL.createObjectURL(this.files[0]);
        document.body.style.background = `url(${url})`;
    }

})



let reg = getSel('.mail');
let sign = getSel('#signIn');
let lock = getSel('#lock_button')
const logEnter = 'Logos';
const passEnter = '2020';

lock.addEventListener('click', function () {
    if (getSel('.fa-lock-open').className == 'fas fa-lock-open hide') {
        this.setAttribute('data-target', "#static_mail")
    } else {
        this.setAttribute('data-target', "#static_mail_out")

        sign.removeAttribute('data-dismiss');
    }
})


getSel('#signOut').addEventListener('click', function () {
    getSel('.fa-lock-open').classList.add('hide')
    getSel('.fa-lock').classList.remove('hide')
    document.edit.elements[0].setAttribute('disabled', 'true');
    document.edit.setAttribute('title', 'need sign in');
    this.setAttribute('data-dismiss', 'modal')
})


sign.addEventListener('click', function () {
    reg.innerText = '';
    let login = document.signIn.login.value;
    let password = document.signIn.password.value;
    if (login == '' || password == '') {
        reg.innerText = 'value is emty'
    } else if (login == logEnter && password == passEnter) {
        
        sign.setAttribute('data-dismiss', 'modal')
        document.edit.elements[0].removeAttribute('disabled');
        getSel('.fa-lock-open').classList.remove('hide')
        getSel('.fa-lock').classList.add('hide')
        document.edit.removeAttribute('title');

    } else {
        reg.innerText = 'wrong login or password'
    }

})



document.edit.elements[0].addEventListener('click', function () {
    getSel('.style-box').classList.add('hide');
    getSel('.edit-box').classList.remove('hide');
    result.classList.add('hide');
    getSel('.textarea').classList.remove('hide');

    getSel('textarea').value = result.innerHTML;
})

document.save.saveBtn.addEventListener('click', function () {
    getSel('.style-box').classList.remove('hide');
    getSel('.edit-box').classList.add('hide');
    result.classList.remove('hide');
    getSel('.textarea').classList.add('hide');
    result.innerHTML = getSel('textarea').value;

})



for (let i = 0; i < document.create_table.elements.length - 2; i++) {
    document.create_table.elements[i].value = ''
}
for (let i = 0; i < document.create_list_ol.elements.length - 2; i++) {
    document.create_list_ol.elements[i].value = ''
}
for (let i = 0; i < document.create_list_ul.elements.length - 2; i++) {
    document.create_table.elements[i].value = ''
}


let table;
let innerTable;
getSel('#creat_tabl_btn').addEventListener('click', function () {

    let countTr = document.create_table.tr.value;
    let countTd = document.create_table.td.value;
    let widthBoard = document.create_table.wBorder.value;
    let typeBoard = document.create_table.type_of_border.value;
    let colorBoard = document.create_table.color_of_border.value;
    let heightTd = document.create_table.hTd.value;
    let widthTd = document.create_table.wTd.value;
    let countEmtyFild = 0;
    for (let y = 0; y < document.create_table.elements.length - 2; y++) {


        if (document.create_table.elements[y].value == '') {
            countEmtyFild++
            if (countEmtyFild > 0) {

                getSel('.table_meseg').innerText = 'value is emty'
            }

        }

    }
    if (countEmtyFild == 0) {
        getSel('.table_meseg ').innerText = '';

        table = document.createElement('table')
        table.style.border = `${widthBoard}px ${typeBoard} ${colorBoard}`;
        table.style.borderCollapse = `collapse`;

        for (let i = 1; i <= countTr; i++) {
            let tr = document.createElement('tr');
            tr.style.border = `${widthBoard}px ${typeBoard} ${colorBoard}`;
            for (let j = 1; j <= countTd; j++) {
                let td = document.createElement('td');
                td.innerText = `TD`;
                td.style.border = `${widthBoard}px ${typeBoard} ${colorBoard}`;
                td.style.height = `${heightTd}px`
                td.style.width = `${widthTd}px`
                tr.appendChild(td)
            }
            table.appendChild(tr);
        }
        innerTable = table.innerHTML;
        getSel('textarea').value += `<table>${innerTable}</table>`;
    }
})

getSel('#reset_tabl_btn').addEventListener('click', function () {
    for (let i = 0; i < document.create_table.elements.length - 2; i++) {
        document.create_table.elements[i].value = ''
    }
})
getSel('#reset_list_ol_btn').addEventListener('click', function () {
    for (let i = 0; i < document.create_list_ol.elements.length - 2; i++) {
        document.create_list_ol.elements[i].value = ''
    }
})
getSel('#reset_list_ul_btn').addEventListener('click', function () {
    for (let i = 0; i < document.create_list_ul.elements.length - 2; i++) {
        document.create_list_ul.elements[i].value = ''
    }
})



let listOl;
let listUl;
let listOlInnerText;
let listUlInnerText;

getSel('#creat_list_ol_btn').addEventListener('click', function () {
    let countLi = getSel('#li').value;
    let styleLi = document.create_list_ol.type_of_marks.value;
    let countEmtyFild = 0;
    for (let y = 0; y < document.create_list_ol.elements.length - 2; y++) {


        if (document.create_list_ol.elements[y].value == '') {
            countEmtyFild++
            if (countEmtyFild > 0) {

                getSel('#list_meseg').innerText = 'value is emty';

            }
        }
    }
    if (countEmtyFild == 0) {
        getSel('#list_meseg ').innerText = '';
        listOl = document.createElement('ol')

        for (let i = 1; i <= countLi; i++) {
            let li = document.createElement('li')
            li.innerText = `items ${i}`;
            li.style.listStyleType = styleLi;
            listOl.appendChild(li);
        }
        listOlInnerText = listOl.innerHTML;
        getSel('textarea').value += `<ol>${listOlInnerText}</ol>`;
    }
})

getSel('#creat_list_ul_btn').addEventListener('click', function () {
    let countLi = getSel('#li2').value;
    let styleLi = document.create_list_ul.type_of_mark2.value;
    let countEmtyFild = 0;
    for (let y = 0; y < document.create_list_ul.elements.length - 2; y++) {


        if (document.create_list_ul.elements[y].value == '') {
            countEmtyFild++
            if (countEmtyFild > 0) {
                getSel('#list_meseg2').innerText = 'value is emty';

            }
        }
    }
    if (countEmtyFild == 0) {
        getSel('#list_meseg2').innerText = '';
        listUl = document.createElement('ul')

        for (let i = 1; i <= countLi; i++) {
            let li = document.createElement('li')
            li.innerText = `items ${i}`;
            li.style.listStyleType = styleLi;
            listUl.appendChild(li);
        }
        listUlInnerText = listUl.innerHTML;
        getSel('textarea').value += `<ul>${listUlInnerText}</ul>`;
    }
})