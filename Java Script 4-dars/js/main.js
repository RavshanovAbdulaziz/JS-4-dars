/*Math in JS - 2*/

/*let round = Math.round(8.9);*/     /* Yaxlidlash-1 */
/*let pow = Math.pow(4,5);*/         /* Darajasini hisoblash */
/*let sqrt = Math.sqrt(116);*/       /* Ildizini topish */
/*let abs = Math.abs(-12.8);*/       /* Absolutlash */
/*let ceil = Math.ceil(49.1);*/      /* Yaxlidlash-2 */
/*let floor = Math.floor(49.9);*/    /* Yaxlidlash-3 */
/*let trunc = Math.trunc(48.9);*/    /* Yaxlidlash-4 */
/*let min = Math.min(110,77,80,140,310,85,90);*/ /* Minimal sonni aniqlash */
/*let max = Math.max(110,77,80,140,310,85,90);*/ /* Maximal sonni aniqlash */
/*document.write(max)*/

/* DOM and Styles in JS*/

let byTag = document.getElementsByTagName('h1');
let byId = document.getElementById('idNomi');
let byClass = document.getElementsByClassName('classNomi');
let bySelector = document.querySelector('.classNomi');
let bySelectorAll = document.querySelectorAll('.classNomi');
let byAll = document.getElementsByTagName('h1').namedItem("idNomi");
let byText1 = document.getElementById("Text-1")

byAll.style.color = "yellow";
byAll.style.backgroundColor = "royalblue";
byAll.style.width = "300px";
byAll.style.height = "250px";
byAll.style.fontSize = "45px";
byAll.style.paddingTop = "90px";
byAll.style.boxSizing = "border-box";
byAll.style.textAlign = "center";
byAll.style.border = "10px solid black";

byText1.style.fontSize = "100px";





















