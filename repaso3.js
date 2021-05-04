"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(nameP, locationP, mobilesP) {
        this.name = nameP;
        this.location = locationP;
        this.mobiles = mobilesP;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileLibrary.prototype.getMobile = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.setMobiles = function (Mobile) {
        this.mobiles = Mobile;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var resultado = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            resultado += this.mobiles[i].getPrice();
        }
        return resultado;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("These are all my mobiles:");
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log(this.mobiles[i].toString());
        }
        console.log("Price overall:" + this.totalPriceCalculation());
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
