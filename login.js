let form = document.getElementById("form");
let successText = document.getElementById("success");
let pass_length = document.getElementById("pass_length");
let pass_lower = document.getElementById("pass_lower");
let pass_capital = document.getElementById("pass_capital");
let pass_number = document.getElementById("pass_number");
let pass_special = document.getElementById("pass_special");
let passwordInput = document.getElementById("password");


let inputs = [pass_lower,pass_capital,pass_number,pass_special,pass_length];

form.onsubmit= function(event){
    event.preventDefault();
    let password = document.getElementById("password").value;
    if(validatePassword(password)){
        document.getElementById("form").style.display = 'none';
        successText.innerHTML = "Success:)";
    } else {
       alert("Passworrd requirements are not met!");
    }
}

passwordInput.addEventListener('keyup', function(){
    let password = document.getElementById("password").value;
    validatePassword(password); 
});

function validatePassword(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!&*.$#@]).{8,}$/;

    const rules = 
        [/^(?=.*[a-z])/,
        /^(?=.*[A-Z])/,
        /^(?=.*\d)/,
        /^(?=.*[!&*.$#@])/,
        /^.{8,}$/]
    for(let i=0; i<5; i++){
        if(rules[i].test(password)){
            inputs[i].classList.remove('fa-xmark');
            inputs[i].classList.add('fa-check');
        } else {
            inputs[i].classList.remove('fa-check');
        }
    }
    return  passwordRegex.test(password);
}