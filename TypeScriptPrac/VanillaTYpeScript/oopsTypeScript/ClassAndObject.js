var User = /** @class */ (function () {
    function User(Name, Age, Gender, Disable) {
        this.name = Name;
        this.age = Age;
        this.gender = Gender;
        this.isDisable = Disable;
    }
    User.prototype.showInfo = function () {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            isDisable: this.isDisable ? "yes" : "no",
            isEligible: this.age >= 18 ? "Yes is Eligible" : "Not Eligible"
        };
    };
    return User;
}());
var userName = document.querySelector("#Name");
var userAge = document.querySelector("#Age");
var userGender = document.querySelector("#Gender");
var userDisabilityCheckBox = document.querySelector("#DisabilityCheckBox");
var displayUser = document.querySelector("#DisplayUser");
var userHandleSubmit = document.querySelector("#handleSubmit");
userHandleSubmit === null || userHandleSubmit === void 0 ? void 0 : userHandleSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(userDisabilityCheckBox);
    if (userName && userAge && userGender) {
        var newUser = new User(userName.value, Number(userAge.value), userGender.value, (userDisabilityCheckBox === null || userDisabilityCheckBox === void 0 ? void 0 : userDisabilityCheckBox.checked) ? true : false);
        var userOBJ = newUser.showInfo();
        displayUser.style.display = "block";
        displayUser.innerHTML = "<h2>User Details</h2>\n    <p>Username : ".concat(userOBJ.name, "</p>\n    <p>User Age : ").concat(userOBJ.age, "</p>\n    <p>Gender : ").concat(userOBJ.gender, "</p>\n    <p>Disablity : ").concat(userOBJ.isDisable, "</p>\n    <p>Eliblity : ").concat(userOBJ.isEligible, "</p>\n    ");
    }
});
