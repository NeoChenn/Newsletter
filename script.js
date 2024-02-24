let submit = document.forms["emailForm"]["submit"]
let email = document.forms["emailForm"]["email"]
let errorMessage = document.querySelector("span")

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function check(emailTest){
    return emailPattern.test(emailTest)
}

submit.addEventListener("click", function(e){
    if (email.value==="" || !check(email.value)){
        e.preventDefault();
        errorMessage.style.visibility = "visible"
        email.style.backgroundColor = "rgb(255, 213, 213)"
        email.style.borderColor="red"
        email.style.color="red"
    } else{
        errorMessage.style.visibility = "hidden"
        email.style.backgroundColor = "transparent"
        email.style.borderColor="black"
        email.style.color="black"
    }

})

