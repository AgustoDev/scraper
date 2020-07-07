const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://www.cbn.gov.ng/";
let data = [];
rp(url)
.then(function (html) {
// const result = $("#container > #coolstuff-CBN > #statisticsDiv > .wrapV > a > .blocksV > .dtb > h2 ", html).text();
const result = $("#container > #coolstuff-CBN > #statisticsDiv > .wrapV > a > .blocksV ", html).each((i,elem) => {
data.push({
value:$(elem).find("> .dtb > h2").text(),
title:$(elem).find(".dtbR").text().trim(),
date:$(elem).find(".dtbR > div").text()
})
})
;
// const result2 = $("#container > #coolstuff-CBN > #statisticsDiv > .wrapV > a > .blocksV > .dtbR ", html).text();
// let jsonString = JSON.stringify(result);
// var ar = result.split(""); // split string on comma space
// console.log(ar);
console.log(data);

// console.log(result2)

// for (dta in ar){
// words.push(dta);
// console.log(words)
// }
})
.catch(function (err) {
console.log("error :", err);
});

