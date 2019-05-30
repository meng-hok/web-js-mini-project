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