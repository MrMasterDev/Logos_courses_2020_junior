let arrow = ['html', 'css', 'html', 'js']
let arrow2 = ['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss']
console.log(arrow)

function removeDuplicates(arrow) {
    let result = [];

    for (let item of arrow) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

let arrCheck1 = removeDuplicates(arrow);

let arrCheck2 = removeDuplicates(arrow2);
console.log(arrCheck1)
console.log(arrow2)
console.log(arrCheck2)