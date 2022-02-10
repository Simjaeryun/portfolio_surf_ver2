const gallery = document.querySelector(".gallery")
const galleryWrap = document.querySelector(".gallery .wrap")
const galList = document.querySelector(".gallery .wrap .list");
const key = "f7cfb698e2ac45b786af0b554ec7cd09";
const flickr_base = "https://www.flickr.com/services/rest/?";
const method1 = "flickr.interestingness.getList";
const method2 = "flickr.photos.search"
const per_page = 50;
const format = "json";
const btnSearch = document.querySelector(".btnSearch")
const input = gallery.querySelector("#search")
const url = `${flickr_base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=wave&privacy_filter=1`;
const body = document.querySelector("body")
const loading = document.querySelector(".loading")
callData(url);


btnSearch.addEventListener("click", e => {
    loading.classList.remove("off")
    let tag = input.value;
    tag = tag.trim();

    const url = `${flickr_base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`;
    if (tag != "") {
        callData(url);
    } else {
        galList.innerHTML = "";
        galList.classList.remove("on");
        galList.style.height = "auto"
        console.log("검색어를 입력하세요");
    }
});

input.addEventListener("keypress", e => {
    if (e.keyCode == 13) {
        let tag = input.value;
        tag = tag.trim();
        const url = `${flickr_base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`;
        if (tag != "") {
            callData(url);
        } else {
            console.log("검색어를 입력하세요");
        }
    }
});

//api fetch하기 
function callData(url) {
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(json => {
            let items = json.photos.photo;
            if (items.length > 0) {
                createList(items);
                galLoading();
                console.log(items.length);
            } else {
                loading.classList.add("off");
                console.log("검색하신 이미지의 데이터가 없습니다");
            }
        })

}

//fetch한 값으로 반복문 돌면서 html만들기 
function createList(items) {

    //htmls 변수에 빈문자열 저장 
    let htmls = ""
    const nextBtn = document.createElement("div");
    const prevBtn = document.createElement("div");
    nextBtn.classList.add("swiper-button-next");
    prevBtn.classList.add("swiper-button-prev")
    items.map(data => {
        const imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

        htmls += `
        <div class="item swiper-slide"> 
                <a href="${imgSrc}">
                    <img src="${imgSrc}" alt="">
                </a>
        </div>
         `;
    })
    galList.innerHTML = htmls;
}

// 이미지 클릭시 popup창 생성
galList.addEventListener("click", e => {
    e.preventDefault();
    let target = e.target.closest(".item");
    if (target) {
        let imgSrc = target.querySelector("a").getAttribute("href");
        let pop = document.createElement("aside");
        let pops = `
                        <img src="${imgSrc}">
                        <span class="close">Close</span>
                        `
        pop.innerHTML = pops;
        gallery.append(pop);
        body.style.overflow = "hidden"
    }
})

// 생성된 popup창 닫기 
gallery.addEventListener("click", (e) => {
    e.preventDefault();
    const pop = e.target.closest("section").querySelector("aside")
    if (pop) {
        const closeBtn = e.target.closest("section").querySelector("aside span")
        if (e.target === closeBtn) {
            pop.remove();
            body.style.overflow = "auto"
        }
    }
})


function galLoading() {
    const imgs = galList.querySelectorAll("img");
    const len = imgs.length;
    let count = 0;
    for (let el of imgs) {
        el.onload = () => {
            count++;
            if (count == len) {
                swiper()
            }
        }
    }

}

function swiper() {
    loading.classList.add("off")
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {

            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                },
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                },
                spaceBetween: 10,
            },
        },

    })
}

