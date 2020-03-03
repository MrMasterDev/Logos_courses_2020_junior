function declaration() {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
        
    }
    return console.log(`Максимальне число: ${max}`);
}

declaration(-12, 15, -6);