class PayMoney {
    //ผลรวมของราคาสินค้า
    sumPrice() {
        let sum = 0;
        let arr = [100, 100, 300, 500];
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

}

const paym = new PayMoney();
const cusPay = new LevelCus();
const money = paym.sumPrice();
console.log(paym.sumPrice())
let level;
let giveVoucher;
let specialOffer;
//ตรวจสอบว่าจะได้ Give Voucher กับ Special Offer เท่าไหร่
if (money < 1000) {
    level = "Standard";
    giveVoucher = 30;
    specialOffer = 30;
} else if (money >= 1000 && money <= 1200) {
    level = "Luxury";
    giveVoucher = 40;
    specialOffer = 40;
} else {
    level = "Emerald";
    giveVoucher = 50;
    specialOffer = 50;
}

console.log(level, giveVoucher, specialOffer);
