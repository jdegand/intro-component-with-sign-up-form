const form = document.getElementById("form");
const inputs = document.querySelectorAll(".input")
const errorMessage = document.querySelectorAll(".error-message");
const iconError = document.querySelectorAll(".icon-error");

form.addEventListener("submit", (e) => {
  //e.preventDefault();
  inputs.forEach((input) => {
    if(!input.value){
      e.preventDefault();
      input.parentElement.classList.add('error');
    }else {
        input.parentElement.classList.remove('error');
    }
  })
})
