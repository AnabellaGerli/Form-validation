/* function hola () {
    alert ("hola");
}*/
var input= document.querySelectorAll("input")


// console.log(input)

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


document.getElementById("Sign-up").click();



function ShowSignUp(){
    document.getElementById("Log-in").style.display= "none";
    document.getElementById ("Sign-up").style.display= "block";


}

function ShowLogIn(){
    document.getElementById("Log-in").style.display= "block";
    document.getElementById ("Sign-up").style.display= "none";
}