document.querySelector(".burger").onclick = function () {
    this.classList.toggle("active");
    document.querySelector(".burger-menu").classList.toggle("menu-active");
}
