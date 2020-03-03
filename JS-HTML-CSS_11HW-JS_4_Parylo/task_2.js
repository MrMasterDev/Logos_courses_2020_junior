let Math = {

}
Math.x = 5;
Math.y = 2;

Math.sum = function () {
    let sum = this.x + this.y;
    return console.log(sum)

}
Math.multiplication = function () {
    let z = this.x * this.y;
    return console.log(z)

}
Math.division = function () {
    let z = this.x / this.y;
    return console.log(z)

}
Math.subtraction = function () {
    let z = this.x - this.y;
    return console.log(z)

}
console.log(Math)
Math.sum()
Math.multiplication()
Math.division()
Math.subtraction()