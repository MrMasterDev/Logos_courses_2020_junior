let arrow = [1, 2, 3]
let arrow2 = [10, 200, 3333]
console.log(arrow)
console.log(arrow2)

function arrToString(arrow) {
    let Arr2 = []
    let newString = arrow.join(` `)
    Arr2 = newString.split(' ')
    return Arr2
}
let arr1 = arrToString(arrow)
let arr2 = arrToString(arrow2)
console.log(arr1)
console.log(arr2)
