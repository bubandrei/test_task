const price = [6, 2, 5, 7, 8, 3, 4];

const profit = (price) => {
    let fav = null;
    let arr = [];
    for (let i = 0; i < price.length; i++) {
        let allDayProfit = []
        for (let j = i+1; j < price.length; j++) {
            let curMax = price[j] - price[i];
            allDayProfit.push(curMax)
        }
        console.log(allDayProfit)
    }
  
    return fav
}
// console.log(profit(price))
profit(price)
