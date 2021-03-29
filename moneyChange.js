const denominations = [0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200];

function moneyChange(money) {
    
    let result = [];
    let collection = [];
    process(result,collection,money,0,0);
    return result;
}

function process(result,collection,money,sum,start) {
    if (sum == money) {
        result.push(collection.map(e=>e));
        return;
    }
    if (sum > money) {
        return;
    }
    for (let i = start; i < denominations.length; i++) {
        collection.push(denominations[i]);
        process(result, collection, money, sum + denominations[i], i);
        combination.pop();
    }
}
module.exports = moneyChange;