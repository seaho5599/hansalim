# hansalim
<h1>한살림 장보기 :: 지구를 살리는 뜻깊은 생활실천, 한살림</h1> <br>
<p>jquery를 사용하지 않고 자바스크립트만으로 작업 예정</p> <br>
<img src="https://user-images.githubusercontent.com/107973870/196312500-281fbe17-75e7-4d1e-919d-4e8f42bd0834.png"><br>
  <h3>click이벤트</h3>
  <p>
  let infoMenu = document.querySelector(".info-menu-btn");
  let infoMenuShow = document.querySelector(".info-menu-deth2");
  infoMenu.onclick = function () {
    infoMenuShow.classList.toggle("click");
  };
  </p>
  <h3>호출</h3> <br>
  <p>
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
</p>
