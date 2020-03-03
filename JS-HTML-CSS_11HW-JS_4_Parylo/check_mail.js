let mail = prompt(`Введіть mail`)

let check = mail.indexOf('@');


function countSpace() {
    switch (check) {
        case 0:
        case -1:
        case (mail.length - 1):
            alert('Невірний mail')
    }

    return check;
}
countSpace()