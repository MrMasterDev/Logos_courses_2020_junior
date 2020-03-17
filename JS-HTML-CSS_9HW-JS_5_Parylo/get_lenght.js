let arrow = ['Ivan' , 'Pavlo', 'Ira']
let arrow2 = ['Oleksiy' , 'Andriana']
console.log(arrow)

function getLength(arrow) {
    let newArr = []
    for (let item of arrow) {
        item = item.length;
        newArr.push(item)
    }
    return newArr
}
const arr1 = getLength(arrow)
const arr2 = getLength(arrow2)
console.log(arr1)
console.log(arrow2)
console.log(arr2)