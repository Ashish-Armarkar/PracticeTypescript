let arr: number[] = [0,1,1,0,1,0,2,0,5,7,9,0,4,1,0,0,23,5,7];
let MoveZeroArr: number[] =[];
let countZero: number = 0;
for(let i=0; i<arr.length-1; i++){
    if(arr[i] > 0){
        MoveZeroArr.push(arr[i])
    }else if(arr[i] === 0){
        countZero +=1;
    }  
}
for(let j=0; j<countZero; j++){
    MoveZeroArr.push(0);
}
console.log(MoveZeroArr);