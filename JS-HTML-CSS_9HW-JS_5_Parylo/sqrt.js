let num = prompt('Введіть число');

function getSqrt(num) {
}
if (num == null || num == '') {
    alert('Будь ласка, введіть число')

} else {
    if (Number.parseFloat(num) > 0) {

        let x = Math.sqrt(num).toFixed(2)
        alert(`Квадратний корінь числа ${num} = ${x}`)

    } else if (Number.parseFloat(num) < 0) {

        alert(`Введіть додатнє число`)

    } else {

        alert('Це не число ,введіть число')
    }
    
}
getSqrt()
