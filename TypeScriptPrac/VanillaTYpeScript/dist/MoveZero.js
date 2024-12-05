"use strict";
let arr = [0, 1, 1, 0, 1, 0, 2, 0, 5, 7, 9, 0, 4, 1, 0, 0, 23, 5, 7];
let MoveZeroArr = arr.map((ele, i) => ele === 0 && arr.slice(i, i + 1));
console.log(MoveZeroArr);
//# sourceMappingURL=MoveZero.js.map