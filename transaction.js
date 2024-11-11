//Task 3

//Importing assets and getAssetByID
import { assets, getAssetById } from './assets.js';

//Exporting a class
export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;

        const asset = getAssetById(assetId);
        if (type === 'sell' && asset.quantity < quantity) {
            throw new Error(`Insufficient quantity for sale of ${asset.name}`);
        }

        if (type === 'buy') {
            asset.quantity += quantity;
        } else if (type === 'sell') {
            asset.quantity -= quantity;
        }
    }
}