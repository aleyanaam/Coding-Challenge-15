//Task 4
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';


// Display the portfolio details
console.log('Portfolio Value: $', calculatePortfolioValue().toFixed(2));


// Display allocation percentages for each asset
const allocations = getPortfolioAllocation();
console.log('Portfolio Allocation:');
allocations.forEach(item => {
 console.log(`${item.name}: ${item.allocation.toFixed(2)}%`);
});


// Create and process  transactions
const transaction1 = new Transaction(1, 'buy', 50);
transaction1.processTransaction();


const transaction2 = new Transaction(4, 'sell', 30); 
transaction2.processTransaction();


console.log('After transactions:');


// Display updated portfolio value
console.log('Updated Portfolio Value: $', calculatePortfolioValue().toFixed(2));


// Display updated allocation
const updatedAllocations = getPortfolioAllocation();
console.log('Updated Portfolio Allocation:');
updatedAllocations.forEach(item => {
 console.log(`${item.name}: ${item.allocation.toFixed(2)}%`);
});
