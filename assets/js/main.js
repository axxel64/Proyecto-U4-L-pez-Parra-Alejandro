/* menu responsive */

$("#menu-button").click(function () {
  $("#contenedor-menu").slideToggle();
});

/* sliders */
$(function () {
  const e = $(".events");
  $("#slider").responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $(".events").append("<li>before event fired.</li>");
    },
    after: function () {
      $(".events").append("<li>after event fired.</li>");
    },
  });
});

/* ancla */
/* window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector("gotop-container").classList.add("show");
  } else {
    document.querySelector("gotop-container").classList.remove("show");
  }
}; */
