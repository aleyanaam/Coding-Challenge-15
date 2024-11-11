//Task 4
// main.js
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

// Create and process some transactions

// Transaction 1: Buy 20 EA stocks (Asset ID = 1)
try {
    const buyTransaction1 = new Transaction(1, 'buy', 20); // Buying 20 EA stocks
    console.log(`Bought 20 EA stocks. New quantity: ${getAssetById(1).quantity}`);
} catch (error) {
    console.error('Transaction failed:', error.message);
}

// Transaction 2: Sell 10 Mattel bonds (Asset ID = 2)
try {
    const sellTransaction1 = new Transaction(2, 'sell', 10); // Selling 10 Mattel bonds
    console.log(`Sold 10 Mattel bonds. New quantity: ${getAssetById(2).quantity}`);
} catch (error) {
    console.error('Transaction failed:', error.message);
}

// Transaction 3: Trying to sell more than available (this should throw an error)
try {
    const sellTransaction2 = new Transaction(3, 'sell', 200); // Trying to sell 200 Apple stocks (only 150 available)
} catch (error) {
    console.error('Transaction failed:', error.message);
}

// After all transactions, display updated portfolio value
console.log('Updated Portfolio Value: $', calculatePortfolioValue().toFixed(2));

// Display updated allocation percentages for each asset
const updatedAllocations = getPortfolioAllocation();
console.log('Updated Portfolio Allocation:');
updatedAllocations.forEach(item => {
    console.log(`${item.name}: ${item.allocation.toFixed(2)}%`);
});
