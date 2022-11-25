/* main.js */
$(function () {
  $("nav .depth1 > li").hover(
    function () {
      // mouseover
      $(this).children().addClass("show");
    },
    function () {
      // mouseout
      $(this).children().removeClass("show");
    }
  );
});
