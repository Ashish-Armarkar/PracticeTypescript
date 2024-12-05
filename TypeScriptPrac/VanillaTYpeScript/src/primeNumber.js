"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [];
for (var i = 2; i <= 100; i++) {
    var isPrime = true;
    for (var j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        arr.push(i);
    }
}
console.log(arr);
