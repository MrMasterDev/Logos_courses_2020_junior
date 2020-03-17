function getDigits(num) {
    let digit = '';
    digit += num
    let x = `0${digit.substring(digit.indexOf('.'))}`
    let res = 'Дробова частина введеного числа:'
    console.log('Введене число = 1.25')
    console.log(res, x)
}
getDigits(1.25)