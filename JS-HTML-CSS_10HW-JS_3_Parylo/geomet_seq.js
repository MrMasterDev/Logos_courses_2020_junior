let z1 = 1;

let prog = function (x, y) {
    let sum = 0;
    for (i = 1; i <= x; i++) {
        let z = z1 * (y ** (i - 1));
        sum += z
    }

    return (console.log(`sum geomet: ${sum}`))
}
prog(5, 2)


let prog1 = function (x, y) {
    let sum = z1 * ((1 - y ** x) / (1 - y))
    return (console.log(`sum geomet: ${sum}`))
}
prog1(4, 3);