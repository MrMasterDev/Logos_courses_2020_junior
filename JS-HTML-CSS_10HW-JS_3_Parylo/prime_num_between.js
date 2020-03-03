let first, second;

function bet() {
    first = +prompt('\Введіть перше число');
    second = +prompt('Введіть останнє число');
    if (second > first) {
        for (let j = first; j <= second; j++) {
            let counts = 0;


            for (let i = 1; i < j; i++) {
                let result = j % i;
                if (result == 0) {
                    counts++;
                }
            }
            if (counts == 1) {
                console.log(j)
            }
        }
    } else if (second < first) {
        for (let j = second; j <= first; j++) {
            let counts = 0;

            for (let i = 1; i < j; i++) {
                let result = j % i;
                if (result == 0) {
                    counts++;
                }
            }
            if (counts == 1) {
                console.log(j)
            }
        }
    }

}

bet();
