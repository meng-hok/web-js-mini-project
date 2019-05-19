
var email;
var re_email;
var username;
var password = "";
var gender;
var department;
var university;
let msgError;


const refresh = () => {
     email="";
     re_email="";
     username="";
     password = "";
     gender="";
     department="";
     university="";
    
} 

$(function () {

    $("#btn-submit").click(function () {
        getData();

    })

});

function getData() {
    refresh();
    try {
        email = $("#email-text").val();
        re_email = $("#re-email-text").val();
        username = $("#username-text").val();
        password = $("#password-text").val();
        gender = $("#gender-select").find(":selected").text();
        department = $("#department-select").find(":selected").text();
        university = $("#university-select").find(":selected").text();
        if (!validated()) { 
            throw msgError;
         }
        console.log(email + re_email + username + password + gender + department + university);
        user_info.push({ email : email , username: username, password: password, gender: gender , department : department , university : university });
        user_account[email] = password; 
        console.log(user_info)   
        console.log(user_account)     
    } catch (msg) {
        console.log(msgError);
        return 0;
    }
}

function validated(){
    if (email != re_email) {
        msgError = "error email";
        return false;
    }
    if (password.length >= 6) {
        msgError = "error password";
        return false;
    }

    else
        return true;
}
