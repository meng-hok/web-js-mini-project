/* linh part */
var email;
var re_email;
var username;
var password = "";
var gender;
var department;
var university;
var msgError;
var showError = $('#error');

const refresh = () => {
  email = "";
  re_email = "";
  username = "";
  password = "";
  gender = "";
  department = "";
  university = "";

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
    if (!checkUser()) {
      throw "msgError";
    }
    console.log(email + re_email + username + password + gender + department + university);
    user_info.push({ email: email, username: username, password: password, gender: gender, department: department, university: university });
    user_account[email] = password;

    current_user_name = username;

    $("#btn-ask").attr("data-target", "#modalAskingQuestion");
    $('#modalContactForm').modal('hide');
    modelCleaner($(".res-cleaner"))
  } catch (msg) {


    console.log(msgError);
     return 0;
  }
}

function validated() {
  var regax_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // if(email==null){
  //   console.log("false")
  //   showError.text("");
  //   showError.text("email can not be null");
  //   msgError = "error email";
  //   return false;
  // }

  if  (!regax_email.test(email)){
    console.log("false")
    showError.text("");
    showError.text("Your email is invalid");
    msgError = "error email";
    return false;
  }

  if (email != re_email) {
    showError.text("");
    showError.text( "Your email does not match");
    msgError = "error email";
    return false;
  }
 
  if (password.length <6) {
    showError.text("");
    showError.text("Password must be longer than 6");
    msgError = "error password";
    return false;
  }
  if (username.length < 6) {
    showError.text("");
    showError.text("Username must be longer than 6");
    msgError = "error username";
    return false;
  }
  else {
    console.log("true")
    showError.text("");
    return true;
}
}
 
function checkUser() {
  var new_email =email;
  var temp_user;
  console.log("being check")
  console.log(temp_user);
  
  for (temp_user of user_info) {
    console.log(temp_user);
    if (temp_user.email == new_email) {
      showError.text("");
      showError.text("Your email already register");
      msgError = "error username";
      return false;
    }
  }
      return true;  
 
}
/* pengsea part */
$("#logIn").click(function () {
  var userName = $("#userName").val();
  var pw = $("#password").val();
  console.log(userName.length);
  checkUser()
  console.log(pw.length);
  if (checkLogIn(userName, pw)) {
    $('#myModal').modal('hide');
  } else {
    $("#userName").css("border-color", "red");
    $("#password").css("border-color", "red");
    $("#inName").css("display", "flex");
    $("#userName")
      .mouseover(function () {
        $("#ex1").css("color", "red");
      })
      .mouseout(function () {
        $("#ex1").css("color", "transparent");
      });
    $("#password")
      .mouseover(function () {
        $("#ex2").css("color", "red");
      })
      .mouseout(function () {
        $("#ex2").css("color", "transparent");
      });
  }
});
var Account = user_account;
Account["Pengsea"] = "1233456";
Account["Menghok"] = "654321";
Account["kimlinh"] = "sss111222";
Account["Nita"] = "111222";
Account["Navy"] = "0987654321";
function checkLogIn(userName, pw) {

  if (Account[userName] == pw) {
    current_user_name = userName;
    $("#btn-ask").attr("data-target", "#modalAskingQuestion");
    modelCleaner($(".log-cleaner"))
    return true;
  }
  return false;
}

