let vm = new Vue({
    el: "#app",
    data: {
        beforeValue: "TWD",
        beforeMoney: 100,
        afterValue: "USD",
        objValue: {
            USD: [30, 30.67, "$"],
            GBP: [37, 39.99, "£"],
            HKD: [3.728, 3.932, "$"],
            JPY: [0.2702, 0.283, "¥"],
            KRW: [0.02446, 0.02836, "₩"],
            THB: [0.8795, 1.0675, "฿"],
            TWD: [1, 1, "NT$"]
        },
        sign: "",
        finMoney: 0
    },
    methods: {
        changeMoney() {
            let beforeEx = this.objValue[this.beforeValue][0];
            let afterEx = this.objValue[this.afterValue][1];
            this.finMoney = (this.beforeMoney * beforeEx / afterEx).toFixed(2);
            this.sign = this.objValue[this.afterValue][2];
            // console.log(this.sign);
            // console.log(this.beforeValue,this.afterValue,this.beforeMoney);
        }
    }
})

document.querySelector("input").addEventListener("focus", function () {
    document.querySelector("input").value = "";
})