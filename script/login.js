function login(event) {
    event.preventDefault(); 

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var message = document.getElementById("login-message");

   
    var savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && email === savedUser.email && password === savedUser.password) {
        alert("Đăng nhập thành công!");
        localStorage.setItem("isLoggedIn", "true"); 
        window.location.href = "Trang-Chu.html"; 
    } else {
        message.textContent = "Email hoặc mật khẩu không đúng!";
    }
}

function cancel() {
    document.querySelector(".login-form").reset();
}