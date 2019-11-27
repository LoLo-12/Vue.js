const vm = new Vue({
    el: "#app",
    data: {
        height: 0,
        weight: 0,
        total: 0,
        status: ""
    },
    computed: {
        calculator() {
            let squareA = this.height / 100;
            let totalNum = this.weight / (squareA * squareA);
            this.total = totalNum.toFixed(1);
            return Number(this.total) || 0;
        }
    },
    methods: {
        suggest: function () {
            let result = parseFloat(this.total);
            if (result < 18.5) {
                return this.status = "體重過輕，再吃營養些，讓自己重一點吧！";
            } else if (18.5 <= result && result < 24) {
                return this.status = "健康體位，不錯喔，請繼續保持！";
            } else if (24 <= result && result < 27) {
                return this.status = "喔喔！需要控制一下飲食了唷！";
            } else if (27 <= result) {
                return this.status = "肥胖容易引起疾病，要多多注意自己的健康囉!";
            }
        },
        storage() {
            // localStorage.removeItem("bmiList");
            let newdate = new Date();
            let month = newdate.getMonth() + 1;
            let date = newdate.getDate();
            let year = newdate.getFullYear();
            let data = {
                nowdate: year + "/" + month + "/" + date,
                height: this.height,
                weight: this.weight,
                total: this.total,
                status: this.status
            }

            const list = JSON.parse(localStorage.getItem('bmiList')) || [];
            list.push(data);
            // console.log(JSON.stringify(list));
            localStorage.setItem("bmiList", JSON.stringify(list));
            let str = `<li class="recordTitle">紀錄 :</li>`;
            for (let i = 0; i < list.length; i++) {
                if (Number(list[i].total)) {
                    str += `<li>日期: ${list[i].nowdate}, 身高: ${list[i].height}, 體重: ${list[i].weight}, BMI:  ${list[i].total}</li>`;
                    // console.log(str);
                }
            }
            document.querySelector(".record").innerHTML = str;
        }
    }
});