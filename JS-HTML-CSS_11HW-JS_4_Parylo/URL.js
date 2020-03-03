let link = prompt('Введіть URL ')
let wrong = ['http://', 'https://']

function Clear() {
    let newLink = '';

    for (let i = 0; i < wrong.length; i++) {
        if (link.indexOf(`${wrong[i]}`) >= 0) {

            for (let j = wrong[i].length; j < link.length; j++) {
                newLink += link.charAt(j)
            }

        }
    }
    return newLink
}

console.log(Clear())