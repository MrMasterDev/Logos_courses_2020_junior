let getSel = sell => document.querySelector(sell);
getSel('.signOut').style.display = 'none'
getSel('#signIn').addEventListener('click', function () {
    if (document.signIn.chec.checked) {


        getSel('.signIn').style.display = 'none'
        getSel('.signOut').style.display = 'block'
        getSel('.person').innerText = document.signIn.elements[0].value + ' ' + document.signIn.elements[1].value;
        getSel('.genders').innerText = document.signIn.gender.value;
        getSel('.mail').innerText = document.signIn.mail.value;
        getSel('.position').innerText = document.signIn.select.value;
       
    } else {
        alert('click checbox')
    }

})
getSel('#signOut').addEventListener('click', function () {
    getSel('.signIn').style.display = 'block'
    getSel('.signOut').style.display = 'none'
    for (let i = 0; i < document.signIn.elements.length; i++) {
        document.signIn.elements[i].value = ''
    }
})