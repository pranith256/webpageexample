function validateform()
{
    let email1=document.getElementById("Email").value;
    var c1=0;
    var c2=0;
    let password1=document.getElementById("pass").value;
    let emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passreg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if(email1.match(emailreg)){
        c1=1;
    }
    if(password1.match(passreg)){
        c2=1;
    }
    if(c1==0){
        if(c2==0){
            alert("The email is invalid "+"\n"+" The password is invalid ");
            
        }
        else{
            alert("The email is invalid "+"\n"+" The password is  valid ");
            

        }
    }
    else{
        if(c2==0){
            alert("The email is valid "+"\n"+" The password is invalid ");
           

        }
        else{
            alert("The email is valid "+"\n"+" The password is also valid ");
     

        }
    }
}

document.getElementById("eye").addEventListener("click",function(){
    if(document.getElementById("pass").type=="password")
{
    this.classList.add("fa-eye");
    this.classList.remove("fa-eye-slash");

    document.getElementById("pass").type="text";
}
else{
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
    document.getElementById("pass").type="password";

}
})