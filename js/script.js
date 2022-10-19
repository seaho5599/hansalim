window.onload = function () {
  // 조합원센터 버튼
  let infoMenu = document.querySelector(".info-menu-btn");
  let infoMenuShow = document.querySelector(".info-menu-deth2");
  infoMenu.onclick = function () {
    infoMenuShow.classList.toggle("click");
  };
  // allmenu 호출
  fetch("json/gnb.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let html = "";
      for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        // console.log(obj);
        let objSub = data[i].submenu;
        // console.log("objSub", objSub);
        // console.log("objSub.length", objSub.length);
        if (objSub !== undefined) {
          html += `
          <li>
            <a href=${obj.link}>${obj.title}</a>
            <ul class="all-menu-sublist">`;

          for (let j = 0; j < objSub.length; j++) {
            let subObj = objSub[j];
            // console.log(subObj);
            html += `
                  <li><a href="${subObj.sublink}">${subObj.subtitle}</a></li>
                  `;
          }
          html += `</ul>

          </li>`;
        }
      }
      html += "";
      // console.log("완료 : ", html);
      document.querySelector(".all-menu-list").innerHTML = html;
    })
    .catch((err) => console.log(err));

  fetch("json/gnb2.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let html = "";
      data.forEach((element) => {
        html += `
        <li>
            <a href=${element.link}>${element.title}</a>
            </li>
        `;
      });
      html += "";
      document.querySelector(".all-menu-list2").innerHTML = html;
    })
    .catch((err) => console.log(err));
  // gnb 버튼
  let join = document.querySelector(".join");
  let moreMenu = document.querySelector(".more-menu");
  let depth2 = document.querySelector(".depth2");
  join.onclick = function () {
    depth2.classList.toggle("click");
    join.classList.toggle("join-click");
    document.querySelector(".more-depth").classList.remove("click");
    document
      .querySelector(".gnb-list > li > .more-menu span:nth-child(2)")
      .classList.remove("click");
    document
      .querySelector(".gnb-list > li > .more-menu span:nth-child(1)")
      .classList.remove("hide");
    moreMenu.classList.remove("more-menu-click");
  };
  moreMenu.onclick = function () {
    document.querySelector(".more-depth").classList.toggle("click");
    moreMenu.classList.toggle("more-menu-click");
    document
      .querySelector(".gnb-list > li > .more-menu span:nth-child(2)")
      .classList.toggle("click");
    document
      .querySelector(".gnb-list > li > .more-menu span:nth-child(1)")
      .classList.toggle("hide");
    depth2.classList.remove("click");
    join.classList.remove("join-click");
  };

  // visual swiper
  fetch("json/visual.json")
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      data.forEach((element) => {
        html += `
        <div class="swiper-slide"><a href ="${element.link}">
          <img src="images/${element.img}" alt="비주얼이미지">
        </a></div>
        `;
      });
      html += "";
      document.getElementById("sw-visual").innerHTML = html;
      let swVisual = new Swiper(".sw-visual", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    })
    .catch((err) => console.log(err));
};
