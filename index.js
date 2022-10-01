const price = [6, 2, 5, 7, 8, 3, 19];

const profit = (price) => {
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

    return Math.max.apply(null, arr);
}
console.log(profit(price))
