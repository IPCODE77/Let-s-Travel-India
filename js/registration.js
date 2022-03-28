let usermail = document.getElementById("useremail");
let validmail = false;
usermail.addEventListener("blur", () => {
  let mailvalue = usermail.value;
  let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.[a-zA-Z]{2,7}$/;
  if (regx.test(mailvalue)) {
    console.log("match");
    usermail.classList.add("is-valid");
    usermail.classList.remove("is-invalid");
    validmail = true;
  } else {
    console.log("not match");
    usermail.classList.add("is-invalid");
    usermail.classList.remove("is-valid");
    validmail = false;
  }
});

// let userpsw=document.getElementById("userpassword")
// let validpassword=false;
// userpsw.addEventListener("blur",()=>{
//     let regx = /^[0-9]{10}$/;
//     let passwordvalue=userpsw.value;
//     if(regx.test(passwordvalue)){
//         userpsw.classList.add("is-valid");
//         userpsw.classList.remove("is-invalid");
//         validpassword=true;
//     }
//     else{
//         userpsw.classList.add("is-invalid");
//         userpsw.classList.remove("is-valid");
//         validpassword=false;
//         alert("password")
//     }
// })

let useraddress = document.getElementById("inputAddress");
let validadersss = false;
useraddress.addEventListener("blur", () => {
  let regx = /[a-zA-Z0-9]{10,400}/;
  let addressvalue = useraddress.value;
  if (regx.test(addressvalue)) {
    useraddress.classList.add("is-valid");
    useraddress.classList.remove("is-invalid");
    validadersss = true;
  } else {
    useraddress.classList.add("is-invalid");
    useraddress.classList.remove("is-valid");
    validadersss = false;
    alert("Enter at least 10 character of address");
  }
});

let userinput=document.getElementById("inputCity");
let validinput=false;
userinput.addEventListener("blur",()=>{
  let regx=/^[a-zA-Z]{5,100}$/;
  let inputvalue=userinput.value;
  if(regx.test(inputvalue)){
    userinput.classList.add("is-valid");
    userinput.classList.remove("is-invalid");
    validinput = true;
  }
  else{
    userinput.classList.add("is-invalid");
    userinput.classList.remove("is-valid");
    validinput = false;
    alert("city name contain min 5 character");
  }
});

let pin=document.getElementById("inputpin");
let validpin=false
pin.addEventListener("blur",()=>{
  let regx=/^[0-9]{6,10}/;
  let pinvalue=pin.value;
  if(regx.test(pinvalue)){
    pin.classList.add("is-valid");
    pin.classList.remove("is-invalid");
    validpin = true;
  }
  else{
    pin.classList.add("is-invalid");
    pin.classList.remove("is-valid");
    validpin = false;
    alert("pincode Number contain minimum 5 number & mx 10 number");
  }
});


let phone=document.getElementById("phone");
let vaildphone=false;
console.log(phone.value);
let submit=document.getElementById("submit");
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  let regx=/^[+0-9]{10,13}/;
  let phonevalue=phone.value;
  if(regx.test(phonevalue)){
    console.log('right');
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
     vaildphone= true;
    
  }
  else{
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
     vaildphone= false;
alert("Mobile Number at leat contain 10 number")    
  }
})


let formsumbit=document.getElementById("formsumbit");
let alertbox=document.getElementById("alertbox");
formsumbit.addEventListener("click",(e)=>{
  e.preventDefault();

  if(validmail&&vaildphone&&validadersss&&validinput&&validpin){
    alertbox.classList.add("alert-success");
    alertbox.classList.remove("alert-danger")
    alertbox.innerHTML=`<strong>Success! </strong>Form submit successfully  We will contact you within 1 business day`
    setTimeout(() => {
        alertbox.innerHTML="";
    }, 2000);}

    
      else{
        alertbox.classList.add("alert-danger");
        alertbox.classList.remove("alert-success")

        alertbox.innerHTML=` <strong>Error! Message:</strong> Input not valid. Hence not submitting the form. Please correct the errors and try again`
        setTimeout(() => {
            alertbox.innerHTML="";
        }, 2000);
    }
})