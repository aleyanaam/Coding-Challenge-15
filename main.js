//Task 4

//Importing from protfolio.js and transaction.js
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js'; 
import { Transaction } from './transaction.js'; 

const portfolioDetailsTable = document.getElementById('portfolio-tbody'); 
const transactionLogTable = document.getElementById('transaction-tbody');
const totalValueElement = document.getElementById('total-value');

//Displays total portfolio value and allocation percentages
console.log('Portfolio Value =',calculatePortfolioValue());
console.log('Portfolio Percentages =', getPortfolioAllocation());
console.log('Transaction:',Transaction());

