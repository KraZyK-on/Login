function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="admin" && password=="user")
    {
        window.location.href="file:///C:/Users/ASUS/OneDrive/Desktop/movie/main.html";
    }
    else{
        alert("Invalid Username and Password");
    }
}
