const gnb = document.querySelector("#gnb");
const gnbBtns = gnb.querySelectorAll("li a");

const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".header_m_nav");

const closeBtns = document.querySelectorAll("section");

for (const el of closeBtns) {
    el.addEventListener("click", (e) => {
        btnCall.classList.remove("on");
        menuMo.classList.remove("on");
    })
}

for (const el of gnbBtns) {
    el.addEventListener("click", e => {
        el.classList.add("on")
    })

}

btnCall.onclick = (e) => {
    e.preventDefault();
    btnCall.classList.add("on");
    menuMo.classList.add("on");

}