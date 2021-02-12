var now = new Date();
var toNow = now.getTime();

var day1 = new Date("2021-08-07");
var toDay1 = day1.getTime();

var day2 = new Date("2022-08-07");
var toDay2 = day2.getTime();

var day3 = new Date("2021-11-21");
var toDay3 = day3.getTime();







var dday1 = toDay1 - toNow;
var ddaynum1 = Math.round(dday1/(1000*60*60*24));

var dday2 = toDay2 - toNow;
var ddaynum2 = Math.round(dday2/(1000*60*60*24));

var dday3 = toDay3 - toNow;
var ddaynum3 = Math.round(dday3/(1000*60*60*24));

document.querySelector("#dday1").innerText = ddaynum1 + "일";
document.querySelector("#dday2").innerText = ddaynum2 + "일";
document.querySelector("#dday3").innerText = ddaynum3 + "일";