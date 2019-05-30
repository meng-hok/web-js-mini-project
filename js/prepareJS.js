$("#btn-ask").attr("data-target","#myModal")
// #modalAskingQuestion#modalContactForm
$("#btn-logout").on("click",function () {
    current_user_name = null;
    if(confirm(`Are you sure to login out`)==true){
        $("#btn-ask").attr("data-target","#myModal");
    }else{
        return;
    }
    
});

var order = true;
var current_page = 0;

const newAsc = () => {
    let question = [...main_question];
        if(order == false){
            let prev_main_question =  question;
            order = true;  
            displayer(0,prev_main_question);
        }

}





const newDesc = () => {
    let question = [...main_question];
    
    if(order ==true){
        
        let prev_main_question =  question.reverse();
        order = false;
        displayer(0,prev_main_question);
      }

  
}



const paginator = (arrayLength) => {  
    let num = arrayLength / 10 + (arrayLength%10 == 0 ? 0 : 1) ;
    let numberList = `<li class="page-item"><a class="page-link">Previous</a></li>`;
    for (let i = 1; i <= num; i++) {
        numberList += `<li class="page-item"><a class="page-link link-number" data-id="${i}">${i}</a></li>`;
    }
    numberList += ` <li class="page-item"><a class="page-link">Next</a></li>`;
    
    $("#paginator").html(numberList);
}

const eventToPaginator = () => {
    $(".link-number").on("click",function(){
        current_page = parseInt($(this).attr("data-id"));
        displayer(parseInt($(this).attr("data-id"))-1)
    })
}

$(function(){
    eventToPaginator();

    ClassicEditor.create( document.querySelector( '#detail' ), {
        // toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
    } )
    .then( editor => {
        window.editor = editor;
    } )
    .catch( err => {
        console.error( err.stack );
    } );
  
})



/*
function call element to reload



navigation
function call element to reload  */

var main_question = new Array();
var user_account = new Array();
var user_info = new Array();
var current_user_name = null;
let i = 0;

while (i < 27) {
    main_question.push({ title: "Is HTML hard to live without CSS ? ", topic: "ctn news", tag: "math", moredetail: "the first programming language" });
    $("#t_body").append(` 
      <tr style="height : 70px;">
              <td>${i} Welcome to Hrd</td>
              <td><sub>30 <3  </sub></td>
              <td>Welcome to Hrd </td>
          </tr>`)
    i++;
}

function getUserName(gmail){
    var idn=gmail.split("@")
   
    if(idn[0].indexOf(".")==-1){
        return idn[0];
    }
    else{
        return idn[0].split(".")[0]+" "+idn[0].split(".")[1];
    }
}

var question;
$('#submit').click(function () {
    console.log(getUserName(current_user_name));
    question = { title: $('#title').val(), topic: $('#topic').val(), tag: $('#tag').val(), moredetail: $('#detail').val() ,user : current_user_name  };     
    if($('#title').val().length<1){
       alert("Missing title!")
       return;
   }
   if( $('#topic').val().length<1){
       alert("Missing Topic!")
       return;
   }
   if( $('#detail').val().length<1){
       alert("Missing Comment!")
       return;
   }            
    $("#modalAskingQuestion").modal("hide");
    main_question.push(question);
    questionToDatalist()
    paginator(main_question.length);
    eventToPaginator();
    modelCleaner($(".ask-cleaner"))
    order = true;
    displayer( current_page==0 ? 0 : current_page-1);
    /* 
        newAsc() OR popularDesc()
        call display method
    */
});

$("#tbl-table-left").on("click", function () {
    newAsc();
});
$("#tbl-table-right").on("click", function () {
    newDesc();
});


const questionToDatalist = () => {
    let array = new Array();
    main_question.forEach(element => {
        array.push(element.title);
    });
    
    setDataList(array)
}
const setDataList = (data) => {
    $("#data-store").empty();
    for (var i = 0; i < data.length; i++) {
        $("#data-store").append("<option value='" + data[i] + "'>");
    }
}


const btnWorker = () => {
    $(".like-click").on("click",function() {
        let num = $(this).next();
        num.text(parseInt(num.text())+1);
        });
}
    

const displayer = (lenghtIndex, arrayer = main_question) => {
    $("#t_body").empty();
    let maxer = (10*lenghtIndex)+10;
    for (let index = 10 * lenghtIndex ; index < maxer; index++) {
       try {
        $("#t_body").append(tableRow(arrayer[index].title,index,index,arrayer[index].user)  )
       } catch (error) {
           break;
       }
       
    }
    btnWorker();


}


const tableRow = (title, eye, like, user) => {
    let diver = ` 
    <br><br>
    <div class="container-fluid">
        <div class="row">
            
            <div class="col-md-12">
                <p class= "title"> ${title}</p>
            </div>
            <div class="col-md-4">
                <a href="#" id="tag">
                    <span class="q-tag-show">Web</span>
                </a>
                <a href="#" id="tag">
                    <span class="q-tag-show">Algo</span>
                </a>
                <a href="#" id="tag">
                    <span class="q-tag-show">AI</span>
                </a>
                <a href="#" id="tag">
                    <span class="q-tag-show">NASA</span>
                </a>
            </div>
            <div class="col-md-4">
                <i class="fa fa-eye" aria-hidden="true"></i>
                <span>${eye}</span>
                &nbsp;
                <i class="far fa-thumbs-up like-click" aria-hidden="true"></i>
                <span>${like}</span>
            </div>
            <div class="col-md-4">
                <p>Asked By ${user == null ? "Unknown" :user} In ${new Date().getFullYear()}</p>
            </div>
        </div>    
    </div>
    <hr class="hrcontent">
    `;
    return diver;
}
questionToDatalist()
paginator(main_question.length)
displayer(0)
