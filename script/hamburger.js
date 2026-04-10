function toggleMenu() {
    let menu = document.getElementById("menuContent");
    
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Đóng menu nếu đang mở
    } else {
        menu.style.display = "block"; // Mở menu nếu đang đóng
    }
}

// Đóng menu khi bấm ra ngoài
window.onclick = function(event) {
    if (!event.target.matches('.hamburger-icon')) {
        let menu = document.getElementById("menuContent");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
    }
};