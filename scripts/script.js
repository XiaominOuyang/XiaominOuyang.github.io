let relationship = {
  "images/xiaomin1.jpg": "images/xiaomin2.jpg",
  "images/xiaomin2.jpg": "images/xiaomin1.jpg",
  "images/drawing1.png": "images/drawing4.png",
  "images/drawing4.png": "images/drawing1.png",
  //some more relationship.... 
}
var dict = {
  FirstName: "Chris",
  "one": 1,
  1: "some value"
};
$(document).ready(function () {
  $("img").click(function () {
    $(this).attr("src", relationship[$(this).attr("src")]);
  });
});
