let flag = 0;
function showHidePassword(){
    let pass_field = document.getElementById("password");
    let showHide = document.getElementById("showHide");
    if(flag == 0){
        pass_field.type = "text";
        showHide.classList = "fa fa-eye-slash";
        flag = 1;
    }
    else{
        pass_field.type = "password";
        showHide.classList = "fa fa-eye";
        flag = 0;
    }
}

function emailAddressCheck(){
    let emailAddress = document.getElementById("email").value;
    if(emailAddress.length == 0){
        console.log("Empty");
        document.getElementById("email_error").innerHTML = "Please enter Email/Club Vistara ID";
    }else{
        document.getElementById("email_error").innerHTML = "";
        console.log("FIll");
    }
}

function passwordCheck(){
    let password = document.getElementById("password").value;
    if(password.length == 0){
        document.getElementById("pass_error").innerHTML = "Please enter Password";
    }else{
        document.getElementById("pass_error").innerHTML = "";
    }
}