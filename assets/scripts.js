$(document).on("click", ".section-page", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    topSpace = 30;
  //alert(id);
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - topSpace,
    },
    800
  );
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("nav-color");
  } else {
    $(".nav").removeClass("nav-color");
  }
});
