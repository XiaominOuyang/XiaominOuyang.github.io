$(document).ready(function () {
  $("img").click(function () {
    if ($(this).attr("src") === "images/xiaomin1.jpg") {
      $(this).attr("src", "images/xiaomin2.jpg");
    } else if ($(this).attr("src") === "images/xiaomin2.jpg") {
      $(this).attr("src", "images/xiaomin1.jpg");
    } else if ($(this).attr("src") === "images/drawing1.png") {
      $(this).attr("src", "images/drawing4.png");
    } else if ($(this).attr("src") === "images/drawing4.png") {
      $(this).attr("src", "images/drawing1.png");
    } else if ($(this).attr("src") === "images/drawing2.png") {
      $(this).attr("src", "images/drawing5.png");
    } else if ($(this).attr("src") === "images/drawing5.png") {
      $(this).attr("src", "images/drawing2.png");
    } else if ($(this).attr("src") === "images/drawing3.png") {
      $(this).attr("src", "images/drawing6.png");
    } else {
      $(this).attr("src", "images/drawing3.png");
    }
  });
});
