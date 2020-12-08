var app = (function(){
    'use strict'; // execute javascript in strict mode. Eg: usage of undeclared variables is not allowed.

    const email = document.getElementById("mail");

    email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("I am expecting an e-mail address!");
        } else {
            email.setCustomValidity("");
        }
    });


}());