let display = document.getElementById('display');
let expression = '';
let transactions = [];

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();
    transactions.push(expression);
    if (transactions.length > 5) {
      transactions.shift();
    }
    console.log(transactions);
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculateSquareRoot() {
  try {
    let result = Math.sqrt(eval(expression));
    display.value = result;
    expression = result.toString();
    transactions.push('√(' + expression + ') = ' + result);
    if (transactions.length > 5) {
      transactions.shift();
    }
    console.log(transactions);
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}

function displayTransactions() {
  let transactionsList = document.getElementById('transactions-list');
  transactionsList.innerHTML = '';
  transactions.forEach(transaction => {
    let li = document.createElement('li');
    li.textContent = transaction;
    transactionsList.appendChild(li);
  });
}

