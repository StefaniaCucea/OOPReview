"use strict";
exports.__esModule = true;
exports.Mobile2 = exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(nameParameter, modelParameter, trademarkParameter, sdSizeParameter, colorParameter, is5GParameter, cameraNumberParameter, priceParameter) {
        this.name = nameParameter;
        this.model = modelParameter;
        this.trademark = trademarkParameter;
        this.sdSize = sdSizeParameter;
        this.color = colorParameter;
        this.is5G = is5GParameter;
        this.cameraNumber = cameraNumberParameter;
        this.price = priceParameter;
    }
    return Mobile;
}());
exports.Mobile = Mobile;
var Mobile2 = /** @class */ (function () {
    function Mobile2(nameParameter, modelParameter, trademarkParameter, sdSizeParameter, colorParameter, is5GParameter, cameraNumberParameter, priceParameter) {
        this.name = nameParameter;
        this.model = modelParameter;
        this.trademark = trademarkParameter;
        this.sdSize = sdSizeParameter;
        this.color = colorParameter;
        this.is5G = is5GParameter;
        this.cameraNumber = cameraNumberParameter;
        this.price = priceParameter;
    }
    Mobile2.prototype.getPrice = function () {
        return this.price;
    };
    Mobile2.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile2.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile2.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile2.prototype.GetIs5G = function () {
        return this.is5G;
    };
    Mobile2.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile2.prototype.getColor = function () {
        return this.color;
    };
    Mobile2.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile2.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile2.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile2.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile2.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile2.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile2.prototype.getName = function () {
        return this.name;
    };
    Mobile2.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile2.prototype.getModel = function () {
        return this.model;
    };
    Mobile2.prototype.toString = function () {
        return ("The characteristics of the mobile " + this.name + " are:\n                Name:" + this.name + " \n                Model:" + this.model + "\n                Trademark:" + this.trademark + "\n                SD Size (GB):" + this.sdSize + "\n                Color:" + this.color + "\n                Is 5G:" + this.is5G + "\n                Number of Cameras:" + this.cameraNumber);
    };
    return Mobile2;
}());
exports.Mobile2 = Mobile2;
