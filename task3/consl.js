const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
  rl.question('Enter the second number: ', (num2) => {
    rl.question('Enter the operation (+, -, *, /): ', (operator) => {
      const result =
        operator === '+'
          ? parseInt(num1) + parseInt(num2)
          : operator === '-'
          ? parseInt(num1) - parseInt(num2)
          : operator === '*'
          ? parseInt(num1) * parseInt(num2)
          : operator === '/'
          ? parseInt(num1) / parseInt(num2)
          : 'Invalid Operator';

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
