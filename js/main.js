
//Visual
const visualBtn = document.querySelector(".visual_btn");
const visualPopup = document.querySelector(".visual_popup")
const visualVideo = visualPopup.querySelector("video");
const visualImgBtn = document.querySelector(".visual_img_play-btn")

visualImgBtn.addEventListener("click", (e) => {
    visualPopup.classList.add("on");
    document.body.style.overflow = "hidden";
    visualVideo.play();
})

visualBtn.addEventListener("click", (e) => {
    visualPopup.classList.add("on");
    document.body.style.overflow = "hidden";
    visualVideo.play();
})

visualPopup.addEventListener("click", (e) => {
    if (!e.target.classList.contains("on")) return;
    visualPopup.classList.remove("on")
    visualVideo.pause();
    document.body.style.overflow = "auto";
})


//Product
const productLogo = document.querySelectorAll(".product_logo");
const productDetailTitle = document.querySelector(".product_detail_title img")
const productImg = document.querySelector(".product_img_box img")

const productPagination = document.querySelector(".product_pagination_box")
const productPrevBtn = productPagination.querySelector("a:first-child")
const productNextBtn = productPagination.querySelector("a:last-child")
const productPaginationTxt = productPagination.querySelector("span");
let productNum = 1;

productPrevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const productLogoOn = document.querySelector(".product_logo.on");
    const productLogoLast = document.querySelector(".product_logo:last-child")
    for (const el of productLogo) {
        el.classList.remove("on");
    }
    productNum--;
    if (productNum < 1) {
        productLogoLast.classList.add("on")
        productNum = 10;
        productPaginationTxt.innerText = `${productNum} / 10`
        productImg.setAttribute("src", `img/board${productNum}.png`)
    }

    productLogoOn.previousElementSibling.classList.add("on");
    productPaginationTxt.innerText = `${productNum} / 10`
    productImg.setAttribute("src", `img/board${productNum}.png`)
})

productNextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const productLogoOn = document.querySelector(".product_logo.on");
    const productLogoFirst = document.querySelector(".product_logo:first-child")
    for (const el of productLogo) {
        el.classList.remove("on");
    }
    productNum++;

    if (productNum > 10) {
        productLogoFirst.classList.add("on")
        productNum = 1;
        productPaginationTxt.innerText = `${productNum} / 10`
        productImg.setAttribute("src", `img/board${productNum}.png`)
    }

    productLogoOn.nextElementSibling.classList.add("on");
    productPaginationTxt.innerText = `${productNum} / 10`
    productImg.setAttribute("src", `img/board${productNum}.png`)
})




productLogo.forEach((el, index) => {
    el.addEventListener("click", e => {
        e.preventDefault();
        let imgSrc = e.currentTarget.querySelector("img").getAttribute("src")
        productDetailTitle.setAttribute("src", imgSrc)
        productImg.setAttribute("src", `img/board${index + 1}.png`)
        for (const el of productLogo) {
            el.classList.remove("on")
        }
        e.currentTarget.classList.add("on")
    })
});


// product Scroll Event
const product = document.querySelector("#product .container .inner")
const productDetailBox = product.querySelector(".product_detail_box")
const productImgBox = product.querySelector(".product_img_box")
const productLogoBox = product.querySelector(".product_logo_box")

//technology Scroll Event
const tech = document.querySelector("#technology .wrap")
const techColumnTxt = tech.querySelector(".tec_column_txt");
const techVideo = tech.querySelector(".tec_video")
const techTxt = tech.querySelector(".tec_txt")


if (window.scrollY > 400) {
    productLogoBox.classList.add("animate__fadeInLeft")
    productImgBox.classList.add("animate__zoomIn")
    productDetailBox.classList.add("animate__fadeInRight")
}

window.addEventListener("scroll", (e) => {
    console.log(window.scrollY)
    if (window.scrollY > 400) {
        productLogoBox.classList.add("animate__fadeInLeft")
        productImgBox.classList.add("animate__zoomIn")
        productDetailBox.classList.add("animate__fadeInRight")
    }
    if (window.scrollY >= 1600) {
        techTxt.classList.add("animate__fadeInRight")
    }
})

