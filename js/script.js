window.onload = function () {
  // 조합원센터 버튼
  let infoMenu = document.querySelector(".info-menu-btn");
  let infoMenuShow = document.querySelector(".info-menu-deth2");
  infoMenu.onclick = function () {
    infoMenuShow.classList.toggle("click");
  };
  // header fix
  window.addEventListener("scroll", () => {
    let temp = window.scrollY;
    if (temp > 50) {
      document.querySelector(".header-bottom").classList.add("fixed");
    } else {
      document.querySelector(".header-bottom").classList.remove("fixed");
    }
  });
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
          el: ".sw-visual-pg",
          type: "fraction",
        },
        navigation: {
          nextEl: ".sw-visual-next",
          prevEl: ".sw-visual-prev",
        },
      });

      let slideNow = "ing";
      let swVisualPlay = document.querySelector(".sw-visual-play");
      swVisualPlay.onclick = function () {
        if (slideNow == "ing") {
          slideNow = "stop";
          swVisual.autoplay.stop();
          swVisualPlay.classList.add("sw-visual-stop");
        } else {
          slideNow = "ing";
          swVisual.autoplay.start();
          swVisualPlay.classList.remove("sw-visual-stop");
        }
      };
    })
    .catch((err) => console.log(err));
  let mainItemData;
  mainItemData = [
    {
      id: "good010203",
      img: "main1.jpg",
      title: "꼬마와땅곱게다진멸치",
      unit: "80g",
      price: "4,400",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      type: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "main2.jpg",
      title: "갈색양송이버섯",
      unit: "140g",
      price: "3,250",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "main3.jpg",
      title: "오이",
      unit: "3개",
      price: "2,650",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "main4.jpg",
      title: "생알땅콩",
      unit: "국산/500g",
      price: "11,400",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "main5.jpg",
      title: "미더덕",
      unit: "250g",
      price: "6,600",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "main6.jpg",
      title: "양파",
      unit: "2kg",
      price: "5,500",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "main7.jpg",
      title: "상추",
      unit: "150g",
      price: "1,600",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "main8.jpg",
      title: "양상추",
      unit: "300g/1통",
      price: "2,250",
      option: ",유기농,무농약",
      option2: "인기,새물품,햇물품",
      type2: "0",
      type: "0",
      link: "#",
      optionNon: "option-none",
    },
  ];
  let saleData = [
    {
      id: "good010203",
      img: "sale1.jpg",
      title: "담감",
      unit: "조생:1.5kg",
      price: "15,500",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      type: "0",
      link: "#",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale2.jpg",
      title: "자연그대로 남성용로션",
      unit: "110ml",
      price: "14,500",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale3.jpg",
      title: "자연그대로 남성용스킨",
      unit: "100ml",
      price: "12,000",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale4.jpg",
      title: "자연그대로 녹차 트러블로션",
      unit: "100ml",
      price: "14,300",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale5.jpg",
      title: "자연그대로 녹차 트러블스팟",
      unit: "20ml",
      price: "9,500",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale6.jpg",
      title: "자연그대로 녹차 트러블토너",
      unit: "150ml",
      price: "14,300",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale7.jpg",
      title: "자연그대로 더마로션",
      unit: "200ml",
      price: "1,600",
      option: " ,유기농,무농약",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale8.jpg",
      title: "자연그대로 더마크림",
      unit: "200g",
      price: "34,500",
      option: ",유기농,무농약",
      option2: "인기,새물품,햇물품",
      type2: "0",
      type: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale9.jpg",
      title: "자연그대로 토너",
      unit: "150ml",
      price: "15,000",
      option: ",유기농,무농약",
      option2: "인기,새물품,햇물품",
      type2: "0",
      type: "0",
      link: "#",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale10.jpg",
      title: "자연그대로 에센스",
      unit: "50ml",
      price: "33,000",
      option: ",유기농,무농약",
      option2: "인기,새물품,햇물품",
      type2: "0",
      type: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale11.jpg",
      title: "자연그대로 로션",
      unit: "120ml",
      price: "21,000",
      option: ",유기농,무농약",
      option2: "인기,새물품,햇물품",
      type2: "0",
      type: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "sale12.jpg",
      title: "자연그대로 크림",
      unit: "60g",
      price: "21,000",
      option: ",유기농,무농약",
      option2: "인기,새물품,햇물품",
      type2: "0",
      type: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
  ];
  let recommendData = [
    {
      id: "good010203",
      img: "recommend1.jpg",
      title: "유기농단백질가루",
      unit: "녹차맛:300g",
      price: "16,000",
      option: "",
      option2: "인기,새물품,햇물품",
      type: "3",
      type2: "0",
      type: "0",
      link: "#",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "recommend2.jpg",
      title: "견과바",
      unit: "35g",
      price: "2,100",
      option: " ,유기농,무농약,목초우유,유기가공식품",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",

      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "recommend3.jpg",
      title: "매일견과",
      unit: "25g*10봉",
      price: "22,500",
      option: " ,유기농,무농약,목초우유,유기가공식품",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "recommend4.jpg",
      title: "카카오파이",
      unit: "152g/4개",
      price: "6,650",
      option: " ,유기농,무농약,목초우유,유기가공식품",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",

      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "recommend5.jpg",
      title: "구운유정란",
      unit: "6알",
      price: "4,400",
      option: " ,유기농,무농약,목초우유,유기가공식품",
      option2: "인기,새물품,햇물품",
      type: "0",
      type2: "0",
      link: "#",

      optionNon: "option-none",
    },
    {
      id: "good010203",
      img: "recommend6.jpg",
      title: "목초우유",
      unit: "200ml",
      price: "1,400",
      option: "유기가공식품",
      option2: "인기,새물품,햇물품",
      type: "3",
      type2: "0",
      link: "#",
    },
    {
      id: "good010203",
      img: "recommend7.jpg",
      title: "플레인요구르트",
      unit: "범산/450ml",
      price: "4,500",
      option: "유기가공식품",
      option2: "인기,새물품,햇물품",
      type: "4",
      type2: "0",
      link: "#",
    },
    {
      id: "good010203",
      img: "recommend8.jpg",
      title: "밤고구마",
      unit: "1kg",
      price: "4,000",
      option: "유기농,무농약",
      option2: "인기,새물품,햇물품",
      type2: "0",
      type: "0",
      link: "#",
    },
    {
      id: "good010203",
      img: "recommend9.jpg",
      title: "냉동딸기",
      unit: "500g",
      price: "5,600",
      option: " ,유기농,무농약,목초우유,유기가공식품",
      option2: "인기,새물품,햇물품",
      type2: "0",
      type: "0",
      link: "#",
      none: "good-none",
      optionNon: "option-none",
    },
  ];
  // 목록 html 을 생성해 주는 함수
  function makeList(_data, _tag, _col) {
    // 물품 출력 코드
    let dataTotal = _data.length;
    // 항목당 보여줄 개수
    let col = _col;
    //  만들어질 가로 수
    let row = Math.ceil(dataTotal / col);

    let html = "";
    for (let i = 0, index = 0; i < row; i++) {
      html += `<div class="swiper-slide good-wrap">`;

      for (let j = 0; j < col; j++) {
        if (index < dataTotal) {
          let goodObj = _data[index];
          let opt2Arr = goodObj.option2.split(",");
          html += `
    <div class="good-box">
      <a href="${goodObj.link}" class="img-link">
        <p class="good-state ${goodObj.none}"><span>${
            opt2Arr[goodObj.type2]
          }</span></p>
        <img src="images/${goodObj.img}" alt="${goodObj.title}" />
      </a>
      <ul class="good-info">
        <li>`;

          // 옵션출력하기
          let optArr = goodObj.option.split(",");
          for (let k = 0; k < optArr.length; k++) {
            html += `<span class="good-info-option ${goodObj.optionNon}">${optArr[k]}</span>`;
          }

          html += `</li>
        <li>
          <p class="good-info-title">${goodObj.title}(<em>${goodObj.unit}</em>)</p>
        </li>
        <li>
          <p class="good-info-price"><b>${goodObj.price}</b>원</p>
          <button class="good-cart-add"></button>
        </li>
      </ul>
    </div>
  `;
          index++;
        }
      }

      html += `</div>`;
    }

    let div = document.querySelector(_tag);
    div.innerHTML = html;
  }
  // 추천상품출력
  makeList(mainItemData, ".mainitem-wrap", 4);
  // 세일상품출력
  makeList(saleData, ".sw-sale-wrap", 3);
  let swSale = new Swiper(".sw-sale", {
    spaceBetween: 16,
    pagination: {
      el: ".sw-sale-pg",
      type: "fraction",
    },
    navigation: {
      nextEl: ".sw-sale-next",
      prevEl: ".sw-sale-prev",
    },
  });

  // 추천상품출력
  makeList(recommendData, ".sw-recommend-wrap", 3);
  let swRecommend = new Swiper(".sw-recommend", {
    spaceBetween: 16,
    pagination: {
      el: ".sw-recommend-pg",
      type: "fraction",
    },
    navigation: {
      nextEl: ".sw-recommend-next",
      prevEl: ".sw-recommend-prev",
    },
  });
  let swPopular = new Swiper(".sw-popular", {
    slidesPerView: 7,
    spaceBetween: 16,
  });
};
