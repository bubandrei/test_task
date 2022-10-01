const price = [6, 2, 5, 9, 8, 3, 6];
const maxProfit = (price) => {
    const result = {};
    let minPrice = Math.min.apply(null, price);
    let maxPrice = Math.max.apply(null, price);
    let arr = [];
    let profit = null;
    for (let i = 0; i < price.length - 1; i++) {
        let allDayProfit = []
        for (let j = i + 1; j < price.length; j++) {
            let curMax = price[j] - price[i];
            allDayProfit.push(curMax)
        }
        profit = allDayProfit.reduce((cur, prev) => { return cur > prev ? cur : prev }, 0);
        arr.push(profit)
    }
    let bestProfit = Math.max.apply(null, arr);
    result.bestDayBuy = price.indexOf(minPrice) + 1;
    result.bestDaySell = price.indexOf(maxPrice) + 1;
    result.profit = bestProfit;
    return result;
}

console.log(maxProfit(price))