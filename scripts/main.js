document.querySelector(".burger").onclick = function () {
    this.classList.toggle("active");
    document.querySelector(".burger-nav").classList.toggle("menu-active");
}