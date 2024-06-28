function Calculatore() {
    let num1 = parseInt(prompt('Enter a number num1'))
    let num2 = parseInt(prompt('Enter a number num2'))
    let operatore = prompt('Enter operators (-,+,/,*)')
    let result;

    if(operatore == '+'){
      result = num1 + num2;
    }
    else if(operatore == '-'){
result = num1 - num2
    }
    else if(operatore == '/'){
        result = num1 / num2
    }
    else if(operatore == '*'){

        result = num1 * num2
    }
    else{
        result = 'Invalid operatore'
    }
    console.log(`result = ${result}`)
}

Calculatore()