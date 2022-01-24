const frame = document.querySelector(".member_profile-box");


fetch('data/member.json')
    .then(data => {
        return data.json();
    })
    .then(json => {
        console.log(json)
        const data = json.data;
        let tags = "";
        data.map(member => {
            tags += `
                        <article class="member_profile">
                            <div class="member_img">
                                <img src="${member.pic}">
                            </div>
                            <div class="member_text">
                                <div class="member_name">
                                    ${member.name}
                                </div>
                                <div class="member_position">
                                    ${member.position}
                                </div>
                                <p class="member_info">
                                    ${member.info}
                                </p>
                            </div>
                        </article>
                        `
        })
        frame.innerHTML = tags;
        const imgs = frame.querySelectorAll("img");
        const len = imgs.length;
        let count = 0;
        for (let el of imgs) {
            el.onload = () => {
                count++;
                if (count === len) {

                    frame.classList.add("on")
                }
            }
        }
    })


