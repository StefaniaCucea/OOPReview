"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var repaso3_1 = require("./repaso3");
var Nokia3210 = new mobile_1.Mobile2('Nokia1', 'Nokia3210', 'Nokia', 20, 'black', false, 1, 300);
var iPhone3G = new mobile_1.Mobile2('iPhone1', 'iPhonexxx', 'iPhone', 20, 'black', false, 2, 600);
var SamsungGalaxy10 = new mobile_1.Mobile2('Samsung1', 'Samsung Galaxy', 'Samsung', 20, 'white', true, 1, 650);
var iPhone5G = new mobile_1.Mobile2('iPhoneghx', 'ghx', 'iPhone', 60, 'white', true, 2, 800);
var mb1 = new repaso3_1.MobileLibrary('TELEFONICA', 'Parla', [Nokia3210, iPhone3G, iPhone5G, SamsungGalaxy10]);
//console.log(mb1.totalPriceCalculation())
console.log(mb1.getMobile());
console.log(mb1.getLocation());
console.log(mb1.getName());
mb1.setLocation('Móstoles');
mb1.setTotalPrice(13000);
console.log(mb1.getLocation());
console.log(mb1.getTotalPrice());
console.log(mb1.printLibrary());
