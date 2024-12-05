let arr : number[] = [];
for(let i=2; i<=100; i++){
    let isPrime: boolean = true;
    for(let j=2; j<=i/2; j++){
        if(i % j === 0){
            isPrime = false;
        }
    }
    if(isPrime){
        arr.push(i)
    }
}

console.log(arr)
export{}