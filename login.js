let form = document.getElementById("form");
let successText = document.getElementById("success");

form.onsubmit= function(event){
    event.preventDefault();
    let password = document.getElementById("password");
    if(password.value == "1234"){
        document.getElementById("form").style.display = 'none';
        successText.innerHTML = "Success:)";
    } else {
        alert("Password is 1234...");
        password.value = "1234";
    }
}