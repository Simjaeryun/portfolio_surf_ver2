
//Product
const productLogo = document.querySelectorAll(".product_logo");
const productDetailTitle = document.querySelector(".product_detail_title img")
const productImg = document.querySelector(".product_img_box img")

productLogo.forEach((el, index) => {
    el.addEventListener("click", e => {
        e.preventDefault();
        let imgSrc = e.currentTarget.querySelector("img").getAttribute("src")
        productDetailTitle.setAttribute("src", imgSrc)
        productImg.setAttribute("src", `img/board${index + 1}.png`)
        for (const el of productLogo) {
            el.classList.remove("on")
            el.querySelector("img").style.filter = "grayscale(1)"
        }
        e.currentTarget.classList.add("on")
        e.currentTarget.querySelector("img").style.filter = "grayscale(0)"
    })
});