// ==UserScript==
// @name         Refresh_Click
// @namespace    1
// @version      0.01
// @description  JD
// @match        https://trade.jd.com/shopping/order/getPresalInfo.action?r=商品编号
// @author       Angel, Komaki
// ==/UserScript==

(function() {
    let time = 4000;  //延时ms

    setTimeout(() => {
        let text = document.getElementById("pre-state").innerText;  //标签中库存状态
        
        if (text != "无货"){
            document.getElementById("presaleEarnest").checked=true; //勾选同意定金选项
            document.getElementById("order-submit").click();  //点击提交订单
        }
        else{
            location.reload();
        }
    },time);
})();
