let login = prompt('Введіть логін');
if(lgoin == 'student'){
    let pass = prompt('Введіть пароль');
    if (pass == 'LOGOS'){
        alert('Ласкаво просимо!');
    } else if (pass == null){
        alert('Вхід скасовано');
    } else {
        alert('Невірний пароль');
    }
} else if(login == null){
    alert('Вхід скасовано');
} else {
    alert('Я вас не знаю');
}

