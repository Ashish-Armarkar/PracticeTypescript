// String
let str : string = "John";
console.log('String ' + str);

// Number 
let num : number = 25;
console.log('Number ' + num);

//Boolean
let bol : boolean = true;
console.log('Boolean ' + bol);

//Array
let arrNumber : number[] = [1,2,3];
console.log('Array ' + arrNumber);

//Tuple
let arrTuble : [string, number, boolean] = ["String",1, true];
console.log('Tuple ' + arrTuble)

//Enum
enum students{
    ashish, armarkar, vinod
}

const studentIndex : number = students.vinod;
const studentName : string = students[0]
console.log({enum : {studentIndex,studentName}});

//Any
let value : any = 1;

value = "XYZ";

console.log(value.toUpperCase());


//Unknown
let unKnownValue : unknown = 2;
unKnownValue = "a"
if(typeof unKnownValue === "string"){
    console.log(unKnownValue.toUpperCase());
}


//Void
const logMessage = (message : string): void =>{
    console.log(message);
}

logMessage("Void type function.");

//Null
let nullValue : null = null;
 console.log("Null type.")

//Undefined
let undefinedValue : undefined = undefined;
console.log(undefinedValue);

//Never
const neverFun = (): never =>{
    throw new Error ("Never type");
} 

try{
    neverFun()
}catch(err){
    console.log(err.message)
}

//Type Aliases
type StringOrNumber = string | number;
let typeValue : StringOrNumber = "hello"
typeValue = 100;
console.log('TypeAliases ' + typeValue);

//Interface
const passFun : (name : string, age : number) => string = (name, age) =>{
       return `${name}${age}`
}

interface person{
    name : string,
    age : number,
    pass () : string 

}

const person1 : person = {
    name : "ashish",
    age : 25,
    pass(){
        return passFun(this.name, this.age)
    }
}  

console.log(`Interface: ${person1.name} age is ${person1.age} and password is ${person1.pass()}`);

//Function type 
const functionFun : (a: number, b: number) => number = (a,b) => {return (a*b)};
let multiply = `Function Type : ${functionFun(5,2)}`;
console.log(multiply);

//Union Type 
let unionValue : string | number = "Hello";
unionValue = 52;
console.log(`Union Type : Hello string type => ${unionValue} number type`);

//Intersection Type
type admin = {name: string, department: string};
type employee = {eId: number, role: string, workingStatus: boolean };
type adminEmployee = admin & employee;

let emp1 : adminEmployee = {name:"ashish", department:"IT", eId: 16, role: "Jr. Developer", workingStatus: true};

console.log({"Intersection type ":{ emp1}});

//Literal Type
// let status : "active" | "inActive";
// status = "active";
// console.log(status);
// status = "inActive";
// console.log(status);



// let status : 200 | 500 | 404 ;
// let x : typeof status; 
// x=200;



 export {};