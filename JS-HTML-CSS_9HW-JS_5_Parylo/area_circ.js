let r = +prompt(`Введіть радіус  кола`)

function getArea(r) {

}
if (r == null || r == '') {
    console.log('Будь ласка, введіть радіус')


} else {
    if (!Number.isNaN(r)) {
        let d = (Math.PI * Math.pow(r, 2)).toFixed(2);
        console.log(`${d} см.кв.`)

    } else {

        alert('Введіть число')
    }
}

getArea()