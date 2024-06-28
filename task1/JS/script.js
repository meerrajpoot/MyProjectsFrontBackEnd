document.getElementById('calculate-button').addEventListener('click', function() {
    var loanAmount = parseFloat(document.getElementById('loan-amount').value);
    var annualInterestRate = parseFloat(document.getElementById('annual-interest-rate').value);
    var loanTerm = parseFloat(document.getElementById('loan-term').value);

    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTerm)) {
      document.getElementById('monthly-payment').value = 'Invalid input';
      return;
    }

    var monthlyInterestRate = annualInterestRate / 100 / 12;
    var numberOfPayments = loanTerm * 12;
    var monthlyPayment = 
    (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    document.getElementById('monthly-payment').value = monthlyPayment.toFixed(2);
  });