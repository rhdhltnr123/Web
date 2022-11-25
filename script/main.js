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
  let img_height = 300; // 이미지 높이값
  let Intervaltime = 3000; // 전환주기

  setInterval(function () {
    img_num++; // 이미지 번호 증가
    // 마지막 이미지면 처음으로
    if (img_num > 2) {
      img_num = 0;
    }
    $(".slider > .sliders").css({
      // 이동값 = 이미지번호 x 이미지 높이값
      transform: `translateY(${-img_num * img_height}px)`,
    });
  }, Intervaltime);

  // 탭 UI
  // 공지사항 버튼
  $(".btn-group .btn-notice").on("click", function () {
    $("#notice-box").addClass("show");
    // 버튼 클래스 초기화
    $("#gallery-box").removeClass("show");

    // 버튼 스타일
    $(".btn-group a").removeClass("show");
    $(this).addClass("show");
  });

  // 갤러리 버튼
  $(".btn-group .btn-gallery").on("click", function () {
    $("#gallery-box").addClass("show");
    // 버튼 클래스 초기화
    $("#notice-box").removeClass("show");

    // 버튼 스타일
    $(".btn-group a").removeClass("show");
    $(this).addClass("show");
  });

  // 팝업창 버튼
  $(".Modal button").on("click", function () {
    $(".Modal").addClass("show");
  });
}); // $
