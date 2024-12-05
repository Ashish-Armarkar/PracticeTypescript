interface UserType{
   name: string,
   age: number,
   gender: string,
   isDisable: boolean |string,
   isEligible:  string
}

class User implements UserType{
   name: string;
   age: number;
   gender: string;
   isDisable: boolean |string;
   isEligible: string;

constructor(Name, Age, Gender, Disable ){
   this.name = Name;
   this.age=Age;
   this.gender = Gender;
   this.isDisable = Disable;
}
   
   showInfo(){
       return {
           name: this.name,
           age: this.age,
           gender : this.gender,
           isDisable : this.isDisable? "yes" : "no",
           isEligible: this.age >= 18 ? "Yes is Eligible" : "Not Eligible"
       }   
   }
   

}


const userName: HTMLInputElement | null = document.querySelector("#Name");
const userAge: HTMLInputElement | null = document.querySelector("#Age");
const userGender: HTMLInputElement | null = document.querySelector("#Gender");
const userDisabilityCheckBox: HTMLInputElement | null = document.querySelector("#DisabilityCheckBox");
let displayUser : HTMLDivElement| null = document.querySelector("#DisplayUser");
const userHandleSubmit: HTMLButtonElement | null = document.querySelector("#handleSubmit");


userHandleSubmit?.addEventListener("click", (event)=>{
   event.preventDefault();
   console.log(userDisabilityCheckBox)

   if(userName && userAge && userGender){
    const newUser = new User( userName.value ,Number(userAge.value),userGender.value, userDisabilityCheckBox?.checked ? true : false);
    const userOBJ = newUser.showInfo();
    displayUser.style.display ="block";
    displayUser.innerHTML = `<h2>User Details</h2>
    <p>Username : ${userOBJ.name}</p>
    <p>User Age : ${userOBJ.age}</p>
    <p>Gender : ${userOBJ.gender}</p>
    <p>Disablity : ${userOBJ.isDisable}</p>
    <p>Eliblity : ${userOBJ.isEligible}</p>
    `
   }
});




