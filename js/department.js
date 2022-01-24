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
                            <h2 class="member_name">
                                ${member.name}
                            </h2>
                            <p class="member_info">
                                ${member.position}
                            </p>
                        </article>
                        `
        })
        frame.innerHTML = tags;
    })