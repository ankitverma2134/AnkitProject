

document.getElementById("btn-submit").addEventListener("click", function(event){
    event.preventDefault();
    console.log("gg")
     let name = document.getElementById("name").value;
     let errorName = document.getElementById("error-name")
     console.log(name,"name")
     if(!name){
         errorName.innerHTML="Please enter your name"
        }
        console.log(errorName,"error")
  });
function shootmsg(event) {
    // event.preventDefault()
    // var name = document.getElementById("name").value;
    // let errorName = document.getElementById("error-name").innerHTML
    // if(!name){
    //  errorName="Please enter your name"
    // }
//     console.log("name=",name);
//     var email= document.getElementById("efg").value;
//     console.log("value=",email);
//     var subject= document.getElementById("hef").value;
//     console.log("value=",subject);
  
//  let arr=[name,email,subject];
//  console.log("value",arr);





}

