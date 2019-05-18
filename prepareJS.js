const newAsc = () => {
    $("#t_body").empty();
    main_question.forEach((value,key)=>{
        console.log(key)
        $("#t_body").append(` 
          <tr>
              <td>${key}</td>
              <td><sub>30 <3  </sub></td>
              <td>firstName</td>
          </tr>`
          )
    });
 }  

 const newDesc = () => {
    $("#t_body").empty();
    main_question.reverse().forEach((value,key)=>{
        console.log(value)
        $("#t_body").append(` 
          <tr>
              <td>${key}</td>
              <td><sub>30 <3  </sub></td>
              <td>firstName</td>
          </tr>`
        )
    });
 }


/* 
function call element to reload 



navigation
function call element to reload  */