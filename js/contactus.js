let useremail=document.getElementById("email");
let validmail=false;
let validnumber=false;
let validtext1=false;
let validtext2=false;
useremail.addEventListener("blur",()=>{
    // console.log('blur');
    let emailvalue=useremail.value;
    let regx=/^(^[_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+).[a-zA-Z]{2,7}$/;
    if(regx.test(emailvalue)){
        useremail.classList.add("is-valid");
        useremail.classList.remove("is-invalid");
        validmail=true;
    }
    else{
        useremail.classList.remove("is-valid");
        useremail.classList.add("is-invalid");
        validmail=false;
        
    }
    
})

let number=document.getElementById("whatsapp");
number.addEventListener("blur",()=>{
    let numbervalue=number.value;
    let regx=/^[0-9]{10}$/
    if(regx.test(numbervalue)){
        number.classList.add("is-valid");
        number.classList.remove("is-invalid");
        validnumber=true;
    }
    else{
        number.classList.remove("is-valid");
        number.classList.add("is-invalid");      
        alert("Mobile number contain  10 number")
        validnumber=false;
    }

});

let usersquarry=document.getElementById("quarry");
let error=document.getElementById("small");
let text=document.getElementById("text");
usersquarry.addEventListener("blur",()=>{
    let quarryvalue=usersquarry.value;
    let  regx= /[a-zA-Z0-9]{5,400}/;
    if(regx.test(quarryvalue)){
        console.log('quarry input');
        error.innerHTML=""
        usersquarry.classList.add("is-valid");
        usersquarry.classList.remove("is-invalid");
        validtext1=true;
    }
    else{
        console.log('quarry not');
        error.innerHTML=`<small style="color: red;">Enter Your Quarry At least 10 character</small>`
        usersquarry.classList.remove("is-valid");
        usersquarry.classList.add("is-invalid");      
        validtext1=false;
    }
});

let yourself=document.getElementById("yourself");
yourself.addEventListener("blur",()=>{
    console.log('blur text');
    let yourselfvalue=yourself.value;
    let  regx= /[a-zA-Z0-9]{5,400}/;
    if(regx.test(yourselfvalue)){
        yourself.classList.add("is-valid");
        yourself.classList.remove("is-invalid");
        validtext2=true;
    }
    else{
        yourself.classList.remove("is-valid");
        yourself.classList.add("is-invalid");      
        alert("Type At least 10 Character About Yourself")
        validtext2=false;
    }
})


let submit=document.getElementById("submit");
let alertbox=document.getElementById("alert");
submit.addEventListener("click",()=>{
    if(validmail&&validnumber&&validtext1&&validtext2){
        alertbox.classList.add("alert-success");
        alertbox.classList.remove("alert-danger")
        alertbox.innerHTML=`<strong>Success! </strong>Sorry for inconvenience caused you.   We will contact you within 1 business day`
        setTimeout(() => {
            alertbox.innerHTML="";
        }, 2000);
    }
    else{
        alertbox.classList.add("alert-danger");
        alertbox.classList.remove("alert-success")

        alertbox.innerHTML=` <strong>Error! Message:</strong> Input not valid. Hence not submitting the form. Please correct the errors and try again`
        setTimeout(() => {
            alertbox.innerHTML="";
        }, 2000);
    }
})