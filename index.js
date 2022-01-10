console.log("This project is on form validations using REGEX");

const uname = document.getElementById("uname");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const address = document.getElementById("address");

let unameValid = false;
let emailValid = false;
let mobileValid = false;

//Validate name here
uname.addEventListener("blur", () => {
  // console.log("Uname is blured");

  let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/; // ( ^ is used here for start's with ) and ( $ is used here for ends with )
  let str = uname.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("Your name is valid");
    unameValid = true;
    uname.classList.remove("is-invalid");
  } else {
    console.log("Your name is not valid");
    uname.classList.add("is-invalid");
  }
});

//Validate email here
email.addEventListener("blur", () => {
  // console.log("Email is blured");

  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z])/; // ( ^ is used here for start's with ) and ( $ is used here for ends with )
  let str = email.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("Your email is valid");
    emailValid = true;
    email.classList.remove("is-invalid");
  } else {
    console.log("Your email is not valid");
    email.classList.add("is-invalid");
  }
});

//Validate mobile here
mobile.addEventListener("blur", () => {
  // console.log("Mobile is blured");

  let regex = /^([0-9]){10}$/; // ( ^ is used here for start's with ) and ( $ is used here for ends with )
  let str = mobile.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("Your mobile number is valid");
    mobileValid = true;
    mobile.classList.remove("is-invalid");
  } else {
    console.log("Your mobile number is not valid");
    mobile.classList.add("is-invalid");
  }
});

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  console.log("Your form is submitted");
  e.preventDefault();

  if (unameValid && unameValid && unameValid) {
    let fail = document.getElementById("fail");
    let success = document.getElementById("success");
    success.classList.add("show");
    fail.classList.remove("show");
    // $("#fail").alert("close");
    // $("#fail").hide();
    // $("#success").show();
    uname.value = "";
    mobile.value = "";
    email.value = "";
    address.value = "";
  } else {
    console.log(
      "One of Name, mobie and email is not valid, please correst the errors and try again"
    );
    let success = document.getElementById("success");
    let fail = document.getElementById("fail");
    fail.classList.add("show");
    success.classList.remove("show");
    // $("#success").alert("close");
    // $("#success").hide();
    // $("#fail").show();
    uname.value = "";
    mobile.value = "";
    email.value = "";
    address.value = "";
  }
});
