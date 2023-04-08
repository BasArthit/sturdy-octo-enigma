class PayMoney {
    //ผลรวมของราคาสินค้า
    sumPrice() {
        let sum = 0;
        let arr = [100, 200, 300, 400, 500];
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

}
const paym = new PayMoney();
console.log(paym.sumPrice())