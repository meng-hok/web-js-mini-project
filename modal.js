
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