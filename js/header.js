const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".header_m_nav");

const closeBtns = document.querySelectorAll("section");

for (const el of closeBtns) {
    el.addEventListener("click", (e) => {
        btnCall.classList.remove("on");
        menuMo.classList.remove("on");
    })
}


btnCall.onclick = (e) => {
    e.preventDefault();
    btnCall.classList.add("on");
    menuMo.classList.add("on");

}