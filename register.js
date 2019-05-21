/* linh part */
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
/* pengsea part */
$("#logIn").click(function() {  
    var userName = $("#userName").val();
    var pw = $("#password").val();
    console.log(userName.length);
  
    console.log(pw.length);
    if (checkLogIn(userName, pw)) {   
      $('#myModal').modal('hide');
    } else {
      $("#userName").css("border-color", "red");
      $("#password").css("border-color", "red");
      $("#userName")
        .mouseover(function() {
          $("#ex1").css("color", "red");
        })
        .mouseout(function() {
          $("#ex1").css("color", "transparent");
        });
        $("#password")
        .mouseover(function() {
          $("#ex2").css("color", "red");
        })
        .mouseout(function() {
          $("#ex2").css("color", "transparent");
        });
    }
  });
  var Account = user_account;
  // Account["Pengsea"] = "1233456";
  // Account["Menghok"] = "654321";
  // Account["kimlinh"] = "sss111222";
  // Account["Nita"] = "111222";
  // Account["Navy"] = "0987654321";
  function checkLogIn(userName, pw) {
    if (Account[userName] == pw) {
      return true;
    }
    return false;
  }