let arr = [1, 2, 3]

function arrCopy(arr) {
    let Arr2 = []
    for (let key in arr) {

        Arr2[key] = arr[key]
    }
    return Arr2
}
const arr1 = arrCopy(arr)
const arr2 = arrCopy([1, 2, 3, [10, 20]])
console.log(arr1)
console.log(arr2)