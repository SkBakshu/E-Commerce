document.getElementById("formContainer").addEventListener("submit",(e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let userData=JSON.parse(localStorage.getItem("userDetails"));
    if(userData.email==email && userData.password==password){
        alert("Login succesfull");
        window.location.href="../Home/Home.html";
        const msg=new SpeechSynthesisUtterance(
            "Hello! Your Login is Successfull. Welcome to Qcart - India's Emerging E-commerce Platform"
        );
        msg.lang="en-US";
        speechSynthesis.speak(msg)
    }else{
        alert("Inavlid Credentials !!!");
        window.location.reload();
    }
})