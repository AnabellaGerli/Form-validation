var input= document.querySelectorAll("input")

console.log(input)

function validation(){
    for (var i=0; i< input.length; i++){
        if (input[i].value == "") {
        input[i].style.border= "1.5px solid red";
        }
        else {
            input[i].style.border= "1.5px solid green";
        }
    }

}

function ShowSignUp(){
    document.getElementById("log-in").style.display= "none";
    document.getElementById ("sign-up").style.display= "block";
}

function ShowLogIn(){
    document.getElementById("log-in").style.display= "block";
    document.getElementById ("sign-up").style.display= "none";
}