/*----------------------------------------------------------------- left dropdown -----------------------------------------------------------------  */

$("#left-side-3-dropdown").html(`<!--Subject Drobdown-->
<div class="subject-drop mt-3">
    <!--Trigger-->

    <button class="btn btn-success btn-drop-subject m-0" id="first-fade-out">High School</button>

    <div class="border mx-1">
        <a class="dropdown-item first-drop" href="#">Physic</a>
        <a class="dropdown-item first-drop" href="#">Math</a>
        <a class="dropdown-item first-drop" href="#">Chemical</a>
        <a class="dropdown-item first-drop" href="#">Bio</a>
        <a class="dropdown-item first-drop" href="#">General Knowledge</a>

    </div>
</div>
<!--End Subject Dropdown -->
<br>
<!--Language Dropdown-->
<div class="language-drop">

    <!--Trigger-->
    <button class="btn btn-success btn-drop-subject m-0" id="second-fade-out">Language</button>

    <!--Menu-->
    <div class="border mx-1">
        <a class="dropdown-item second-drop" href="#">Khmer</a>
        <a class="dropdown-item second-drop" href="#">English</a>
        <a class="dropdown-item second-drop" href="#">Korean</a>
    </div>
</div>
<!--Language Dropdown-->

<br>
<!--Programming Dropdown-->
<div class="language-drop">

    <!--Trigger-->
    <button class="btn btn-success btn-drop-subject m-0" id="third-fade-out">Programming</button>

    <!--Menu-->
    <div class="border mx-1">
        <a class="dropdown-item third-drop" href="#">Programming</a>
        <a class="dropdown-item third-drop" href="#">Web Development</a>
        <a class="dropdown-item third-drop" href="#">Graphic Design</a>
        <a class="dropdown-item third-drop" href="#">Database</a>
        <a class="dropdown-item third-drop" href="#">Computer Science</a>
    </div>
</div>
<!--Programming Dropdown-->`);

/*----------------------------------------------------------------- left dropdown -----------------------------------------------------------------  */


/*----------------------------------------------------------------- navbar -----------------------------------------------------------------  */

$("#first-nav-bar").html(`
<nav class="mb-1 navbar navbar-expand-lg navbar-dark ">
<a class="navbar-brand mr-5" href="#">
    <img src="image/logo-beta.png" alt="forum-logo" class="logo-img">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarSupportedContent-333" aria-controls="navbarSupportedContent-333"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="ml-5 collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul class="navbar-nav mr-auto w-75">
        <li class="nav-item w-100">
            <form class="form-inline my-2 my-lg-0 ml-auto">
                <input class="form-control w-50  " autocompleted="off" list="data-store" type="search" id="" placeholder="ស្វែងរកសំណួរ..." aria-label="Search">
               
                <button type="button" class="ml-0 btn btn-default5">Search</button>

                <button id="btn-ask" type="button" class="btn btn-default5" data-toggle="modal"
                    data-target="#modalAskingQuestion">Asking Question</button>


            </form>
        </li>
    </ul>
    <button id="btn-login" type="button" class="btn btn-outline-white btn-success btn-md my-2 my-sm-0 ml-3" data-toggle="modal" data-target="#myModal">
        Sign In
    </button>
    <button id="btn-register" type="button" class="btn  btn-outline-white btn-success btn-md my-2 my-sm-0 ml-3" id="btnnGoIn"
        data-toggle="modal" data-target="#modalContactForm">
        Sign Up
    </button>
    <button id="btn-logout" class="btn  btn-outline-white  btn-success btn-md my-2 my-sm-0 ml-3" >Log Out</button>   
</div>

</nav>
<datalist id="data-store">
`);
/*----------------------------------------------------------------- navbar -----------------------------------------------------------------  */
$("#myModal").html(`
<div class="modal-dialog" role="document">

            <div class="modal-content">
                <div>
                    <div class="modal-header">
                        <h3 class="modal-title text-white">Log in</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <div style="margin-right: 10px; margin-top: 3px"> <span style="color: red"
                                    aria-hidden="true">&times;</span></div>
                        </button>
                    </div>
                </div>
                <div class="modal-body">
                    <div>
                        <label for="userName">User Name:<i class="fas fa-exclamation-circle" id="ex1"></i></label>
                        <input type="text" name="userName" id="userName" class="form-control">
                        
                    </div>
                    <div class="form-group">
                        <label>Password: </label>
                        <input type="password" name="password" id="password" class="form-control" >
                        <i class="fas fa-exclamation-circle ml-2" id="ex2"></i>
                        
                    </div>
                   <div class="link"> <a href="http://">Create new Account</a></div>
                    <div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary mr-4" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary mr-4" id="logIn">Login</button>
                </div>
            </div>
        </div>
`);
// login
$("#modalAskingQuestion").html(`
<div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
        <div class="modal-header green ">
            <h4 class="modal-title w-100 font-weight-bold text-center text-white">Asking Question</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    
        <div class="modal-body">
            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="title" placeholder="Asking question here.">
                </div>
            </div>

            <div class="form-group row">
                <label for="topic" class="col-sm-2 col-form-label">Topic</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="topic" placeholder="--Select Topic--">
                </div>
            </div>


            <div class="form-group row">
                <label for="tag" class="col-sm-2 col-form-label">Tag</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="tag" placeholder="Add a tag">
                </div>
            </div>


            <div class="form-group row">
                <label for="detail" class="col-sm-2 col-form-label">More Detail</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="detail">
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-default btn-md" id="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
`);

$("#modalContactForm").html(`
<div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header text-center green text-white">
    <h4 class="modal-title w-100 font-weight-bold">Register</h4>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body mx-3">
    <div class="  mb-3">
   <!-- email -->
      <label for="email">Input your email</label>
      <input type="email" id="email-text" class="form-control  " placeholder="E-mail">
    </div>

    <div class="  mb-3">
       <!-- re-email -->
       <label for="re-email-text">Input your email</label>
       <input type="email" id="re-email-text" class="form-control  " placeholder="Re-enter e-mail">
    </div>

    <div class="  mb-3">
  <!-- username-text -->
  <label for="username-text">Input your username</label>
  <input type="text" id="username-text" class="form-control " placeholder="Username">
    </div>

    <div class="mb-3">
     <!-- password -->
     <label for="password-text">Input your password</label>
     <input type="password" id="password-text" class="form-control " placeholder="Password">
    </div>
      
   
          
    <div class="  mb-3">
      <label for="gender-select">Gender</label>
      <select class="browser-default custom-select " id="gender-select">

          <option value="male">Male</option>
          <option value="female">Female</option>

      </select>
        </div>
          
        <div class=" mb-3">
          <!-- department -->
      <label for="department-select">Department</label>
      <select class="browser-default custom-select " id="department-select">

          <option value="Computer-Science">Computer Science</option>
          <option value="High-school">High School</option>

      </select>
            </div>
    <div class="  mb-3">
      <!-- Universtiy -->
      <label for="university-select">Department</label>
      <select class="browser-default custom-select " id="university-select">

          <option value="Rupp">Rupp</option>
          <option value="Bkk">Bkk</option>

      </select>
        </div>

  </div>
  <div class="modal-footer d-flex justify-content-center">
      <button id="btn-submit" class="btn btn-block btn-success">Sign in</button>
      <div class="text-center"> <a href="#" >Already have account?</a></div>
  </div>
</div>
</div>
`) 

$("#first-fade-out").on("click", function () {
    $(".first-drop").slideToggle(300);
});
$("#second-fade-out").click(function () {
    $(".second-drop").slideToggle(300);
});
$("#third-fade-out").click(function () {
    $(".third-drop").slideToggle(300);
})