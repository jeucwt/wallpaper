function signup(event) {
    event.preventDefault(); // chan reload

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    // kiem tra lai mat khau
    if (password !== confirmpassword) {
        alert("Mật khẩu không khớp!");
        return;
    }

    // luu thong tin vao local storage
    var userData = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
    window.location.href = "dangnhap.html"; // Chuyển hướng đến trang đăng nhập
}

// ham huy 
function cancel() {
    document.querySelector(".signup-form").reset();
}
