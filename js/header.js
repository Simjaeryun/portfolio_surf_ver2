const gnb = document.querySelector("#gnb");
const gnbBtns = gnb.querySelectorAll("li a");



for (const el of gnbBtns) {
    el.addEventListener("click", e => {
        el.classList.add("on")
    })

} 