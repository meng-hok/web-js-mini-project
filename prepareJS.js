$("#btn-ask").attr("data-target","#myModal")
// #modalAskingQuestion#modalContactForm
$("#btn-logout").on("click",function () {
    current_user_name = null;
    $("#btn-ask").attr("data-target","#myModal");
});
const newAsc = () => {
    $("#t_body").empty();
    main_question.forEach((value, key) => {

        // title: $('#title').val(), topic: $('#topic').val(), tag: $('#tag').val(), moredetail: $('#detail').val()
        $("#t_body").append(` 
          <tr>
              <td>${key}</td>
              <td>${value.title}</td>
              <td>${value.topic}</td>
              <td>${value.tag}</td>
              <td>${value.moredetail}</td>
          </tr>`
        )
    });
}

const newDesc = () => {
    $("#t_body").empty();
    main_question.reverse().forEach((value, key) => {
        console.log(value)
        $("#t_body").append(` 
          <tr>
          <td>${key}</td>
          <td>${value.title}</td>
          <td>${value.topic}</td>
          <td>${value.tag}</td>
          <td>${value.moredetail}</td>
          </tr>`
        )
    });
}


/*
function call element to reload



navigation
function call element to reload  */