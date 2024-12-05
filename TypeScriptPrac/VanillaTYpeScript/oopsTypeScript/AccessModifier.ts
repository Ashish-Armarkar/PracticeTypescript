class car{
    name: string;
    modelNo : number;
    price : number;
    private diffected: boolean;
    protected numberPlate : number;
    constructor(name, modelNo, price, diffected){
        
        name: this.name;
        modelNo : this.modelNo;
        price : this.price;
        diffected: this.diffected;
        numberPlate : this.numberPlate;
    }
}

class myCar extends car{
    color: string;


    
}

const newObj = new myCar("ashish");

console.log(newObj)
