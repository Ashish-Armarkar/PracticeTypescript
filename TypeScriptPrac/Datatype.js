"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String
var str = "John";
console.log('String ' + str);
// Number 
var num = 25;
console.log('Number ' + num);
//Boolean
var bol = true;
console.log('Boolean ' + bol);
//Array
var arrNumber = [1, 2, 3];
console.log('Array ' + arrNumber);
//Tuple
var arrTuble = ["String", 1, true];
console.log('Tuple ' + arrTuble);
//Enum
var students;
(function (students) {
    students[students["ashish"] = 0] = "ashish";
    students[students["armarkar"] = 1] = "armarkar";
    students[students["vinod"] = 2] = "vinod";
})(students || (students = {}));
var studentIndex = students.vinod;
var studentName = students[0];
console.log({ enum: { studentIndex: studentIndex, studentName: studentName } });
//Any
var value = 1;
value = "XYZ";
console.log(value.toUpperCase());
//Unknown
var unKnownValue = 2;
unKnownValue = "a";
if (typeof unKnownValue === "string") {
    console.log(unKnownValue.toUpperCase());
}
//Void
var logMessage = function (message) {
    console.log(message);
};
logMessage("Void type function.");
//Null
var nullValue = null;
console.log("Null type.");
//Undefined
var undefinedValue = undefined;
console.log(undefinedValue);
//Never
var neverFun = function () {
    throw new Error("Never type");
};
try {
    neverFun();
}
catch (err) {
    console.log(err.message);
}
var typeValue = "hello";
typeValue = 100;
console.log('TypeAliases ' + typeValue);
//Interface
var passFun = function (name, age) {
    return "".concat(name).concat(age);
};
var person1 = {
    name: "ashish",
    age: 25,
    pass: function () {
        return passFun(this.name, this.age);
    }
};
console.log("Interface: ".concat(person1.name, " age is ").concat(person1.age, " and password is ").concat(person1.pass()));
//Function type 
var functionFun = function (a, b) { return (a * b); };
var multiply = "Function Type : ".concat(functionFun(5, 2));
console.log(multiply);
//Union Type 
var unionValue = "Hello";
unionValue = 52;
console.log("Union Type : Hello string type => ".concat(unionValue, " number type"));
var emp1 = { name: "ashish", department: "IT", eId: 16, role: "Jr. Developer", workingStatus: true };
console.log({ "Intersection type ": { emp1: emp1 } });
//Literal Type
var status;
status = "active";
console.log(status);
status = "inActive";
console.log(status);
