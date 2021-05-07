function validateemailform()
{
    let email1=document.getElementById("Email").value;
    var c1=0;
    var c2=0;
    let emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email1.match(emailreg)){
        c1=1;
    }
    if(c1==1){
        alert("The email is valid .");
    }
    else{
        alert("The email is invalid ");
    }
}