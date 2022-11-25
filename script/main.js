/* main.js */
$(function () {
  // 1. 해당 목록만 내려오는 유형(기본)
  // 2. 전체 목록만 내려오는 유형
  $("nav .depth1 > li").hover(
    function () {
      // mouseover
      // $(this).children().addClass("show");
      $("nav .depth2").addClass("show");
    },
    function () {
      // mouseout
      // $(this).children().removeClass("show");
      $("nav .depth2").removeClass("show");
    }
  );

  // 이미지 슬라이더
  let img_num = 0; // 이미지 번호

  setInterval(function () {
    img_num++; // 이미지 번호 증가
    // 마지막 이미지면 처음으로
    if (img_num > 2) {
      img_num = 0;
    }
    $(".slider > .sliders").css({
      transform: `translateY(${-img_num * 300}px)`,
    });
  }, 3000);
}); // $
