let word = prompt(`Введіть стрічку`)

let space = ' ';
let count = 0;

function Space() {
    for (let i = 0; i < word.length; i++) {

        if (word.charAt(i) == space) {
            count++;
        }

    }
    return console.log(count)
}
Space()