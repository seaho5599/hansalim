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
      data.forEach((element) => {
        let subMenu = element.submenu;
        console.log("1", subMenu);
        html += `
            <li>
              <a href=${element.link}>${element.title}</a>
                <ul>
                  <li>
                    <a href="${element.sublink}">${element.subtitle}</a>
                    </li>
                </ul>
            </li>  
        `;
      });
      html += "";
      document.querySelector(".all-menu-list").innerHTML = html;
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
};
