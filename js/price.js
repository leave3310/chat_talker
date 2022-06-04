$(document).ready(function () {
  $(".normal-question-btn").click(function (e) {
    e.preventDefault();
    $(this).find("h3").toggleClass("normal-question-active fw-bolder");
    $(this).find(".normal-question-des").slideToggle();
    const plus =
      "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_plus.svg";
    const minus =
      "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_minus.svg";
    let imgSrc = "";
    if ($(this).find("img").attr("src") === plus) {
      imgSrc = minus;
      $(this).find("img").attr("src", imgSrc).addClass("pt-10");
    } else {
      imgSrc = plus;
      $(this).find("img").attr("src", imgSrc).removeClass("pt-10");
    }
  });
  $(".choose-person li").click(function (e) {
    console.log(e.target.innerText);
    $(this).addClass("active").siblings().removeClass("active");

    switch (e.target.innerText) {
      case "10000位":
        changeText("10000", "600", "1600");
        break;
      case "15000位":
        changeText("15000", "1200", "2000");
        break;
      case "20000位":
        changeText("20000", "1500", "2500");
        break;
      case "25000位":
        changeText("25000", "1700", "3000");
        break;
      case ">25000位":
        changeText("洽客服", "洽客服", "洽客服");
        break;
    }
  });
});

function changeText(person, basePrice, advancePrice) {
  $("#base-sub-person").first().text(person);
  $("#base-sub-price").first().text(basePrice);
  $("#advance-sub-person").first().text(person);
  $("#advance-sub-price").first().text(advancePrice);
}
