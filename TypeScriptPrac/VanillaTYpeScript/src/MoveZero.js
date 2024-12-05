var arr = [0, 1, 1, 0, 1, 0, 2, 0, 5, 7, 9, 0, 4, 1, 0, 0, 23, 5, 7];
var MoveZeroArr = [];
var countZero = 0;
for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > 0) {
        MoveZeroArr.push(arr[i]);
    }
    else if (arr[i] === 0) {
        countZero += 1;
    }
}
for (var j = 0; j < countZero; j++) {
    MoveZeroArr.push(0);
}
console.log(MoveZeroArr);
