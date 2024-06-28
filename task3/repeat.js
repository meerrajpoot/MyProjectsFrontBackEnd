function Calculatore() {
    

let num1 = parseFloat(prompt("Enter Number1:"))
let num2 = parseFloat(prompt("Enter Number2:"))
let operators = prompt("Enter Operators :+,-,*,/") 


let result;

switch (operators) {
    case '+':
        result = num1 + num2;
        break;

        case '-':
        result = num1 - num2;
        break;

        case '*':
        result = num1 * num2;
        break;

        case '/':
        result = num1 / num2;
        break;


    default:
        console.log('Invalid operation')
        break;
}

console.log("result:"+ result)


}

Calculatore();


