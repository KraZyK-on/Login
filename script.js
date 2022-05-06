function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="admin" && password=="user")
    {
        window.location.href="https://home-page-b2psd8act-karanbisht1915-gmailcom.vercel.app/";
    }
    else{
        alert("Invalid Username and Password");
    }
}
