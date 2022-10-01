const price = [2, 4, 3, 7, 5, 4, 7];

const profit = (price) => {
    let fav = null;
    for (let i = 0; i < price.length; i++) {
        for (let j = 0; j < price.length; j++) {
            let curMax = price[j] - price[j];
            console.log(curMax)
        }
    }
    return fav
}
console.log(profit(price))
