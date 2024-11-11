//Task 3
// Importing assets and getAssetById from the asset module
import { assets, getAssetById } from './assets.js';

// Exporting the Transaction class
export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;

        // Fetch the asset details by ID
        const asset = getAssetById(assetId);

        // If the asset doesn't exist, throw an error
        if (!asset) {
            throw new Error(`Asset with ID ${assetId} not found.`);
        }

        // Handling the "sell" case: check if there is enough quantity to sell
        if (type === 'sell') {
            if (asset.quantity < quantity) {
                throw new Error(`Insufficient quantity for sale of ${asset.name}`);
            }
            // Reduce quantity for sell
            asset.quantity -= quantity;
        }

        // Handling the "buy" case: increase quantity for buy
        else if (type === 'buy') {
            asset.quantity += quantity;
        } else {
            throw new Error(`Invalid transaction type: ${type}. Only 'buy' or 'sell' are allowed.`);
        }
    }
}
