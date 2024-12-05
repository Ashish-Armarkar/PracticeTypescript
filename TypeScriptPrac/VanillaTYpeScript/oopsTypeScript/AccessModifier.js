var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car = /** @class */ (function () {
    function car(name, modelNo, price, diffected) {
        name: this.name;
        modelNo: this.modelNo;
        price: this.price;
        diffected: this.diffected;
        numberPlate: this.numberPlate;
    }
    return car;
}());
var myCar = /** @class */ (function (_super) {
    __extends(myCar, _super);
    function myCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return myCar;
}(car));
var newObj = new myCar("ashish");
console.log(newObj);
