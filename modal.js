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
        <a class="dropdown-item first-drop" href="#">Knowledge</a>

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
        <a class="dropdown-item third-drop" href="#">Web</a>
        <a class="dropdown-item third-drop" href="#">Design</a>
        <a class="dropdown-item third-drop" href="#">Database</a>
        <a class="dropdown-item third-drop" href="#">Science</a>
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
    <ul class="navbar-nav mr-auto w-50">
        <li class="nav-item w-100">
            <form class="form-inline my-2 my-lg-0 ml-auto">
                
             
                <input class="form-control " style="width:40%" list="data-store" type="text" id="" placeholder="ស្វែងរកសំណួរ..." aria-label="Search"  autocomplete="off"/>
               
                <button type="button" style="width:20%; font-size :10px" class="ml-0 btn btn-default5">Search</button>
                <button id="btn-ask" style="width:10% font-size :5px" type="button" class="btn btn-default5" data-toggle="modal"
                data-target="#modalAskingQuestion">ASK</button>


            </form>
        </li>
    </ul>
    <button id="btn-login" type="button" class="btn btn-outline-white btn-success btn-md my-2 my-sm-0 ml-3" data-toggle="modal" data-target="#myModal">
        Sign In
    </button>
    <button id="btn-register" type="button" class="btn  btn-outline-white btn-success btn-md my-2 my-sm-0 ml-3" id="btnnGoIn"
        data-toggle="modal" data-target="#modalContactForm">
        New
    </button>
    <button id="btn-logout" class="btn  btn-outline-white  btn-success btn-md my-2 my-sm-0 ml-3" >Out</button>   
</div>

</nav>
<datalist id="data-store">
`);
/*----------------------------------------------------------------- navbar -----------------------------------------------------------------  */
/*--------- LOGIN-----*/
$("#myModal").html(` <div class="modal-dialog" role="document">

<div class="modal-content">
    <div>
        <div class="mhead">
            <h3 class="mtitle font-weight-bold">Log in</h3>
            <button type="button" class="out" data-dismiss="modal" aria-label="Close">
                <div style="margin-right: 10px; margin-top: 3px"> <span style="color: red;"
                        aria-hidden="true" class="clox">&times;</span></div>
            </button>
        </div>
    </div>
    <div class="mbody">
                          <div>
            <label for="userName" class="labeler">User Name:<i class="fas fa-exclamation-circle ipengsea" id="ex1"></i></label>
            <input type="text" name="userName" id="userName" class="fcontrol log-cleaner">
            
        </div>

        <div class="form-group div2">
            <label class="labeler">Password: </label>
            <input type="password" name="password" id="password" class="fcontrol log-cleaner" >
            <i class="fas fa-exclamation-circle ml-2 ipengsea" id="ex2"></i>
            
        </div>
        <p style="color: red" class="invalidName" id="inName">Invalid user's name or Password</p>

       <div class="lin"> <a href="http://">Create new Account</a></div>
        <div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn mr-4 can" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary mr-4" id="logIn">Login</button>
    </div>
</div>
</div>`);
/*----------------------------------------Asking Question-------------------------------------------------------------* */ 
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
                    <input type="text" class="form-control ask-cleaner" id="title" placeholder="Asking question here.">
                </div>
            </div>

            <div class="form-group row">
                <label for="topic" class="col-sm-2 col-form-label">Topic</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control ask-cleaner" id="topic" placeholder="--Select Topic--">
                </div>
            </div>


            <div class="form-group row">
                <label for="tag" class="col-sm-2 col-form-label">Tag</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control ask-cleaner" id="tag" placeholder="Add a tag">
                </div>
            </div>


            <div class="form-group row">
                <label for="detail" class="col-sm-2 col-form-label">More Detail</label>
                <div class="col-sm-10">
                   <!-- <input type="text" class="form-control" id="detail"> -->
                    <textarea  name="my-editor" id="detail" cols="30" rows="10" style="height:320px;"> </textarea>
                    
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

    <div id="error" class="  mb-3" style="color:red"></div>
    <div class="  mb-3">
    <form>
   <!-- email -->
      <label for="email">Input your email</label>
      <input type="email" id="email-text" class="form-control res-cleaner"  required placeholder="E-mail">
    </div>

    <div class="mb-3">
       <!-- re-email -->
       <label for="re-email-text">Input your email</label>
       <input type="email" id="re-email-text" class="form-control res-cleaner " required placeholder="Re-enter e-mail">
    </div>

    <div class="  mb-3">
  <!-- username-text -->
  <label for="username-text">Input your username</label>
  <input type="text" id="username-text" class="form-control res-cleaner "  required placeholder="Username">
    </div>

    <div class="mb-3">
     <!-- password -->
     <label for="password-text">Input your password</label>
     <input type="password" id="password-text" class="form-control res-cleaner" placeholder="Password">
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
      </form>
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

const modelCleaner = (classStr) => {
    classStr.val("");
}