window.onload = function () {
    document.querySelectorAll(".menu a").forEach(function (menuLink) {
        menuLink.style.color = "#ffffff";
    });
};
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        // Munculkan navbar saat scroll ke atas
        document.getElementById("navbar").style.top = "0";
        if (window.pageYOffset >= 10) {
            document.getElementById("navbar").style.backgroundColor = "#ffffff";
            document.querySelectorAll(".menu a").forEach(function (menuLink) {
                menuLink.style.color = "#000000";
            });
        }
        else {
            document.getElementById("navbar").style.backgroundColor = "transparent";
            document.querySelectorAll(".menu a").forEach(function (menuLink) {
                menuLink.style.color = "#ffffff";
            });
        }

    } else {
        // Sembunyikan navbar saat scroll ke bawah
        document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
};