//Task 2 

//Importing the assets from the asset.js file
import { assets, getAssetById } from './asset.mjs';


//Exports a function that finds the total sum of the portfolio
export function calculatePortfolioValue() {
   return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
 }


//Exports a function that calculates the percentage allocation of each portfolio asset
export function getPortfolioAllocation() {
   const totalValue = calculatePortfolioValue();
   return assets.map(asset => ({
       name: asset.name, allocation: ((asset.price * asset.quantity) / totalValue) * 100
   }));
}
