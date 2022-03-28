console.log("Home.js");
let useremail = document.getElementById("email");
let alertbox = document.getElementById("alertbox");
let validemail = false;
let validpsw = false;
useremail.addEventListener("blur", () => {
  console.log("blured");
  // let regx=/^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+).\([a-zA-Z]){2,7}$/;
  let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]+){2,7}$/;
  let emailvalue = useremail.value;
  // console.log(emailvalue);
  if (regx.test(emailvalue)) {
    useremail.classList.add("is-valid");
    useremail.classList.remove("is-invalid");
    // console.log("match");
    validemail = true;
  } else {
    useremail.classList.add("is-invalid");
    useremail.classList.remove("is-valid");
    console.log("not match");
    validemail = false;
  }
});

let userpassword = document.getElementById("passsword");
userpassword.addEventListener("blur", () => {
  console.log("blur");
  let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let passswordvalue = userpassword.value;
  console.log(passswordvalue);
  if (regx.test(passswordvalue)) {
    userpassword.classList.add("is-valid");
    userpassword.classList.remove("is-invalid");
    // console.log("match");
    validpsw = true;
  } else {
    userpassword.classList.add("is-invalid");
    userpassword.classList.remove("is-valid");
    // console.log("not match");
    validpsw = false;
  }
});

let login = document.getElementById("login");
login.addEventListener("click", (e) => {
  e.preventDefault();
  if (validemail && validpsw) {
    alertbox.innerHTML = `<div class="alert alert-success" role="alert"><strong>Success</strong>
        Log in successful
      </div>`;
    setTimeout(() => {
      alertbox.innerHTML = "";
    }, 2000);
  } else {
    alertbox.innerHTML = `<div class="alert alert-danger" role="alert"><strong>Error! Message:</strong> Log in details not valid. 
        
      </div>`;
    setTimeout(() => {
      alertbox.innerHTML = "";
    }, 2000);
  }
});

// for signup
let validinputmail = false;
let validinputpsw = false;

let inputemail = document.getElementById("useremail");
inputemail.addEventListener("blur", () => {
  console.log("blured");
  let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]+){2,7}$/;
  let mailvalue = inputemail.value;
  if (regx.test(mailvalue)) {
    inputemail.classList.add("is-valid");
    inputemail.classList.remove("is-invalid");
    validinputmail = true;
  } else {
    inputemail.classList.add("is-invalid");
    inputemail.classList.remove("is-valid");
    console.log("not match");
    //   validemail=false;
    validinputmail = false;
  }
});

let inputpassword = document.getElementById("userpassword1");
inputpassword.addEventListener("blur", () => {
  console.log("blur");
  let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let inputpswvalue = inputpassword.value;
  if (regx.test(inputpswvalue)) {
    inputpassword.classList.add("is-valid");
    inputpassword.classList.remove("is-invalid");
    validinputpsw = true;
  } else {
    inputpassword.classList.add("is-invalid");
    inputpassword.classList.remove("is-valid");
    validinputpsw = false;
  }
});

let inputpassword2 = document.getElementById("userpassword2");
inputpassword2.addEventListener("blur", () => {
  console.log("blur");
  let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let inputpswvalue2 = inputpassword2.value;
//   if (regx.test(inputpswvalue2)) {
//       va
// } else {
// }
});

let sumbit = document.getElementById("submit");
sumbit.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputpassword.value == inputpassword2.value) {
        console.log("match");
        inputpassword2.classList.add("is-valid");
        inputpassword2.classList.remove("is-invalid");
        validinputpsw = true;
        sumbit.setAttribute("data-bs-dismiss","modal")

    } else {
        console.log("not match");
        alert("Password Are Not Match");
        inputpassword2.classList.add("is-invalid");
        inputpassword2.classList.add("is-invalid");
        inputpassword2.classList.remove("is-valid");
        validinputpsw = false;
        sumbit.setAttribute("data-bs-dismiss","non ")
  }
  if (validinputmail && validinputpsw) {
    alertbox.innerHTML = `<div class="alert alert-success" role="alert"><strong>Success</strong>
        New account create successfully
      </div>`;
    setTimeout(() => {
      alertbox.innerHTML = "";
    }, 2000);
  } else {
    alertbox.innerHTML = `<div class="alert alert-danger" role="alert"><strong>Error! Message:</strong> input details not valid. 
        
      </div>`;
    setTimeout(() => {
      alertbox.innerHTML = "";
    }, 2000);
  }
});
