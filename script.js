let nav_right = document.querySelector("#nav_right");
let nav_right_span = document.querySelector("#nav_right>span");

nav_right.addEventListener("mouseenter", function () {
  nav_right_span.style.transform = "scale(1.4)";
  nav_right_span.style.transition = "1s";
});
nav_right.addEventListener("mouseleave", function () {
  nav_right_span.style.transform = "scale(1)";
  nav_right_span.style.transition = "1s";
});

// ---
let btn1 = document.querySelector("#btn1");
let btn1_span1 = document.querySelector("#btn1_span1");
let btn1_span2 = document.querySelector("#btn1_span2");

btn1.addEventListener("mouseenter", function () {
  btn1.style.transform = "scale(1.1)";
  btn1.style.transition = "1s";

  btn1_span1.style.transform = "translatey(-120%)";
  btn1_span1.style.transition = "0.2s";

  btn1_span2.style.transform = "translatey(0%)";
  btn1_span2.style.transition = "0.2s";
});
btn1.addEventListener("mouseleave", function () {
  btn1.style.transform = "scale(1)";
  btn1.style.transition = "1s";

  btn1_span1.style.transform = "translatey(0%)";
  btn1_span1.style.transition = "0.2s";

  btn1_span2.style.transform = "translatey(120%)";
  btn1_span2.style.transition = "0.2s";
});

// ------page4-left
// ---
let btn2 = document.querySelector("#btn2");
let btn2_span1 = document.querySelector("#btn2_span1");
let btn2_span2 = document.querySelector("#btn2_span2");

btn2.addEventListener("mouseenter", function () {
  btn2.style.transform = "scale(1.1)";
  btn2.style.transition = "1s";

  btn2_span1.style.transform = "translatey(-120%)";
  btn2_span1.style.transition = "0.2s";

  btn2_span2.style.transform = "translatey(0%)";
  btn2_span2.style.transition = "0.2s";
});
btn2.addEventListener("mouseleave", function () {
  btn2.style.transform = "scale(1)";
  btn2.style.transition = "1s";

  btn2_span1.style.transform = "translatey(0%)";
  btn2_span1.style.transition = "0.2s";

  btn2_span2.style.transform = "translatey(120%)";
  btn2_span2.style.transition = "0.2s";
});

// --------------page4
// ---center----box1

let page4_center_box1_text = document.querySelector("#page4_center_box1_text");
let page4_center_top_p = document.querySelector("#page4_center_top>p");

page4_center_box1.addEventListener("mouseenter", function () {
  page4_center_top_p.style.width = "13vw";
  page4_center_top_p.style.transition = "0.3s";
});

page4_center_box1_text.addEventListener("mouseleave", function () {
  page4_center_top_p.style.width = "0vw";
  page4_center_top_p.style.transition = "0.3s";
});

// ---center----box2

let page4_center_box3_text = document.querySelector("#page4_center_box3_text");
let page4_center_top3_p = document.querySelector("#page4_center_top3>p");

page4_center_box3_text.addEventListener("mouseenter", function () {
  page4_center_top3_p.style.width = "10vw";
  page4_center_top3_p.style.transition = "0.3s";
});

page4_center_box3_text.addEventListener("mouseleave", function () {
  page4_center_top3_p.style.width = "0vw";
  page4_center_top3_p.style.transition = "0.3s";
});

// ---center----box5
let page4_center_box5_text = document.querySelector("#page4_center_box5_text");
let page4_center_top5_p = document.querySelector("#page4_center_top5>p");

page4_center_box5_text.addEventListener("mouseenter", function () {
  page4_center_top5_p.style.width = "16vw";
  page4_center_top5_p.style.transition = "0.3s";
});

page4_center_box5_text.addEventListener("mouseleave", function () {
  page4_center_top5_p.style.width = "0vw";
  page4_center_top5_p.style.transition = "0.3s";
});

// ---center----box7
let page4_center_box7_text = document.querySelector("#page4_center_box7_text");
let page4_center_top7_p = document.querySelector("#page4_center_top7>p");

page4_center_box7_text.addEventListener("mouseenter", function () {
  page4_center_top7_p.style.width = "22vw";
  page4_center_top7_p.style.transition = "0.3s";
});

page4_center_box7_text.addEventListener("mouseleave", function () {
  page4_center_top7_p.style.width = "0vw";
  page4_center_top7_p.style.transition = "0.3s";
});

// ----------------right--------------------
// ---right--box2 ---
let page4_right_box2_text = document.querySelector("#page4_right_box2_text");
let page4_right_top2_p = document.querySelector("#page4_right_top2>p");

page4_right_box2_text.addEventListener("mouseenter", function () {
  page4_right_top2_p.style.width = "9vw";
  page4_right_top2_p.style.transition = "0.3s";
});

page4_right_box2_text.addEventListener("mouseleave", function () {
  page4_right_top2_p.style.width = "0vw";
  page4_right_top2_p.style.transition = "0.3s";
});

// ---right--box4 ---
let page4_right_box4_text = document.querySelector("#page4_right_box4_text");
let page4_right_top4_p = document.querySelector("#page4_right_top4>p");

page4_right_box4_text.addEventListener("mouseenter", function () {
  page4_right_top4_p.style.width = "11vw";
  page4_right_top4_p.style.transition = "0.3s";
});

page4_right_box4_text.addEventListener("mouseleave", function () {
  page4_right_top4_p.style.width = "0vw";
  page4_right_top4_p.style.transition = "0.3s";
});

// ---right--box6 ---
let page4_right_box6_text = document.querySelector("#page4_right_box6_text");
let page4_right_top6_p = document.querySelector("#page4_right_top6>p");

page4_right_box6_text.addEventListener("mouseenter", function () {
  page4_right_top6_p.style.width = "9vw";
  page4_right_top6_p.style.transition = "0.3s";
});

page4_right_box6_text.addEventListener("mouseleave", function () {
  page4_right_top6_p.style.width = "0vw";
  page4_right_top6_p.style.transition = "0.3s";
});

// ---right--box8 ---
let page4_right_box8_text = document.querySelector("#page4_right_box8_text");
let page4_right_top8_p = document.querySelector("#page4_right_top8>p");

page4_right_box8_text.addEventListener("mouseenter", function () {
  page4_right_top8_p.style.width = "13vw";
  page4_right_top8_p.style.transition = "0.3s";
});

page4_right_box8_text.addEventListener("mouseleave", function () {
  page4_right_top8_p.style.width = "0vw";
  page4_right_top8_p.style.transition = "0.3s";
});

//  ------page5-----
// ---
let btn3 = document.querySelector("#btn3");
let btn3_span1 = document.querySelector("#btn3_span1");
let btn3_span2 = document.querySelector("#btn3_span2");

btn3.addEventListener("mouseenter", function () {
  btn3.style.transform = "scale(1.1)";
  btn3.style.transition = "1s";

  btn3_span1.style.transform = "translatey(-120%)";
  btn3_span1.style.transition = "0.2s";

  btn3_span2.style.transform = "translatey(0%)";
  btn3_span2.style.transition = "0.2s";
});
btn3.addEventListener("mouseleave", function () {
  btn3.style.transform = "scale(1)";
  btn3.style.transition = "1s";

  btn3_span1.style.transform = "translatey(0%)";
  btn3_span1.style.transition = "0.2s";

  btn3_span2.style.transform = "translatey(120%)";
  btn3_span2.style.transition = "0.2s";
});

// --------------page5
// ---center----box1

let page5_center_box1_text = document.querySelector("#page5_center_box1_text");
let page5_center_top_p = document.querySelector("#page5_center_top>p");

page5_center_box1.addEventListener("mouseenter", function () {
  page5_center_top_p.style.width = "13vw";
  page5_center_top_p.style.transition = "0.3s";
});

page5_center_box1_text.addEventListener("mouseleave", function () {
  page5_center_top_p.style.width = "0vw";
  page5_center_top_p.style.transition = "0.3s";
});

// ---center----box3

let page5_center_box3_text = document.querySelector("#page5_center_box3_text");
let page5_center_top3_p = document.querySelector("#page5_center_top3>p");

page5_center_box3_text.addEventListener("mouseenter", function () {
  page5_center_top3_p.style.width = "10vw";
  page5_center_top3_p.style.transition = "0.3s";
});

page5_center_box3_text.addEventListener("mouseleave", function () {
  page5_center_top3_p.style.width = "0vw";
  page5_center_top3_p.style.transition = "0.3s";
});

// ---center----box5
let page5_center_box5_text = document.querySelector("#page5_center_box5_text");
let page5_center_top5_p = document.querySelector("#page5_center_top5>p");

page5_center_box5_text.addEventListener("mouseenter", function () {
  page5_center_top5_p.style.width = "16vw";
  page5_center_top5_p.style.transition = "0.3s";
});

page5_center_box5_text.addEventListener("mouseleave", function () {
  page5_center_top5_p.style.width = "0vw";
  page5_center_top5_p.style.transition = "0.3s";
});

// ---center----box7
let page5_center_box7_text = document.querySelector("#page5_center_box7_text");
let page5_center_top7_p = document.querySelector("#page5_center_top7>p");

page5_center_box7_text.addEventListener("mouseenter", function () {
  page5_center_top7_p.style.width = "22vw";
  page5_center_top7_p.style.transition = "0.3s";
});

page5_center_box7_text.addEventListener("mouseleave", function () {
  page5_center_top7_p.style.width = "0vw";
  page5_center_top7_p.style.transition = "0.3s";
});

// ----------------right--------------------
// ---right--box2 ---
let page5_right_box2_text = document.querySelector("#page5_right_box2_text");
let page5_right_top2_p = document.querySelector("#page5_right_top2>p");

page5_right_box2_text.addEventListener("mouseenter", function () {
  page5_right_top2_p.style.width = "9vw";
  page5_right_top2_p.style.transition = "0.3s";
});

page5_right_box2_text.addEventListener("mouseleave", function () {
  page5_right_top2_p.style.width = "0vw";
  page5_right_top2_p.style.transition = "0.3s";
});

// ---right--box4 ---
let page5_right_box4_text = document.querySelector("#page5_right_box4_text");
let page5_right_top4_p = document.querySelector("#page5_right_top4>p");

page5_right_box4_text.addEventListener("mouseenter", function () {
  page5_right_top4_p.style.width = "11vw";
  page5_right_top4_p.style.transition = "0.3s";
});

page5_right_box4_text.addEventListener("mouseleave", function () {
  page5_right_top4_p.style.width = "0vw";
  page5_right_top4_p.style.transition = "0.3s";
});

// ---right--box6 ---
let page5_right_box6_text = document.querySelector("#page5_right_box6_text");
let page5_right_top6_p = document.querySelector("#page5_right_top6>p");

page5_right_box6_text.addEventListener("mouseenter", function () {
  page5_right_top6_p.style.width = "9vw";
  page5_right_top6_p.style.transition = "0.3s";
});

page5_right_box6_text.addEventListener("mouseleave", function () {
  page5_right_top6_p.style.width = "0vw";
  page5_right_top6_p.style.transition = "0.3s";
});

// ---right--box8 ---
let page5_right_box8_text = document.querySelector("#page5_right_box8_text");
let page5_right_top8_p = document.querySelector("#page5_right_top8>p");

page5_right_box8_text.addEventListener("mouseenter", function () {
  page5_right_top8_p.style.width = "13vw";
  page5_right_top8_p.style.transition = "0.3s";
});

page5_right_box8_text.addEventListener("mouseleave", function () {
  page5_right_top8_p.style.width = "0vw";
  page5_right_top8_p.style.transition = "0.3s";
});

// ------------------page7--------------
let btn4 = document.querySelector("#btn4");
let btn4_span1 = document.querySelector("#btn4_span1");
let btn4_span2 = document.querySelector("#btn4_span2");

btn4.addEventListener("mouseenter", function () {
  btn4.style.transform = "scale(1.1)";
  btn4.style.transition = "1s";

  btn4_span1.style.transform = "translatey(-120%)";
  btn4_span1.style.transition = "0.2s";

  btn4_span2.style.transform = "translatey(0%)";
  btn4_span2.style.transition = "0.2s";
});
btn4.addEventListener("mouseleave", function () {
  btn4.style.transform = "scale(1)";
  btn4.style.transition = "1s";

  btn4_span1.style.transform = "translatey(0%)";
  btn4_span1.style.transition = "0.2s";

  btn4_span2.style.transform = "translatey(120%)";
  btn4_span2.style.transition = "0.2s";
});

// -------------------------page8_right_button----------------------

// ------------------page7--------------
let btn5 = document.querySelector("#btn5");
let page8_right_left = document.querySelector("#page8_right_left");
let btn5_span1 = document.querySelector("#btn5_span1");
let btn5_span2 = document.querySelector("#btn5_span2");

page8_right_left.addEventListener("mouseenter", function () {
  btn5.style.transform = "scale(1)";
  btn5.style.transition = "1s";

  btn5_span1.style.transform = "translatey(-120%)";
  btn5_span1.style.transition = "0.3s";

  btn5_span2.style.transform = "translatey(0%)";
  btn5_span2.style.transition = "0.3s";
});
page8_right_left.addEventListener("mouseleave", function () {
  btn5.style.transform = "scale(1)";
  btn5.style.transition = "1s";

  btn5_span1.style.transform = "translatey(0%)";
  btn5_span1.style.transition = "0.3s";

  btn5_span2.style.transform = "translatey(120%)";
  btn5_span2.style.transition = "0.3s";
});

// ------------------page8--------------
let btn6 = document.querySelector("#btn6");
let page8_right_right = document.querySelector("#page8_right_right");
let btn6_span1 = document.querySelector("#btn6_span1");
let btn6_span2 = document.querySelector("#btn6_span2");

page8_right_right.addEventListener("mouseenter", function () {
  btn6.style.transform = "scale(1)";
  btn6.style.transition = "1s";

  btn6_span1.style.transform = "translatey(-120%)";
  btn6_span1.style.transition = "0.3s";

  btn6_span2.style.transform = "translatey(0%)";
  btn6_span2.style.transition = "0.3s";
});
page8_right_right.addEventListener("mouseleave", function () {
  btn6.style.transform = "scale(1)";
  btn6.style.transition = "1s";

  btn6_span1.style.transform = "translatey(0%)";
  btn6_span1.style.transition = "0.3s";

  btn6_span2.style.transform = "translatey(120%)";
  btn6_span2.style.transition = "0.3s";
});

// ------------------page9--------------
let btn7 = document.querySelector("#btn7");
let btn7_span1 = document.querySelector("#btn7_span1");
let btn7_span2 = document.querySelector("#btn7_span2");

btn7.addEventListener("mouseenter", function () {
  btn7.style.transform = "scale(1)";
  btn7.style.transition = "1s";

  btn7_span1.style.transform = "translatey(-120%)";
  btn7_span1.style.transition = "0.3s";

  btn7_span2.style.transform = "translatey(0%)";
  btn7_span2.style.transition = "0.3s";
});
btn7.addEventListener("mouseleave", function () {
  btn7.style.transform = "scale(1)";
  btn7.style.transition = "1s";

  btn7_span1.style.transform = "translatey(0%)";
  btn7_span1.style.transition = "0.3s";

  btn7_span2.style.transform = "translatey(120%)";
  btn7_span2.style.transition = "0.3s";
});

// ------------------page9--------------
let btn8 = document.querySelector("#btn8");
let btn8_span1 = document.querySelector("#btn8_span1");
let btn8_span2 = document.querySelector("#btn8_span2");

btn8.addEventListener("mouseenter", function () {
  btn8.style.transform = "scale(1)";
  btn8.style.transition = "1s";

  btn8_span1.style.transform = "translatey(-120%)";
  btn8_span1.style.transition = "0.3s";

  btn8_span2.style.transform = "translatey(0%)";
  btn8_span2.style.transition = "0.3s";
});
btn8.addEventListener("mouseleave", function () {
  btn8.style.transform = "scale(1)";
  btn8.style.transition = "1s";

  btn8_span1.style.transform = "translatey(0%)";
  btn8_span1.style.transition = "0.3s";

  btn8_span2.style.transform = "translatey(120%)";
  btn8_span2.style.transition = "0.3s";
});

// ------------------page9--------------
let btn9 = document.querySelector("#btn9");
let btn9_span1 = document.querySelector("#btn9_span1");
let btn9_span2 = document.querySelector("#btn9_span2");

btn9.addEventListener("mouseenter", function () {
  btn9.style.transform = "scale(1)";
  btn9.style.transition = "1s";

  btn9_span1.style.transform = "translatey(-120%)";
  btn9_span1.style.transition = "0.3s";

  btn9_span2.style.transform = "translatey(0%)";
  btn9_span2.style.transition = "0.3s";
});
btn9.addEventListener("mouseleave", function () {
  btn9.style.transform = "scale(1)";
  btn9.style.transition = "1s";

  btn9_span1.style.transform = "translatey(0%)";
  btn9_span1.style.transition = "0.3s";

  btn9_span2.style.transform = "translatey(120%)";
  btn9_span2.style.transition = "0.3s";
});

// ------------------page9--------------
let btn10 = document.querySelector("#btn10");
let btn10_span1 = document.querySelector("#btn10_span1");
let btn10_span2 = document.querySelector("#btn10_span2");

btn10.addEventListener("mouseenter", function () {
  btn10.style.transform = "scale(1)";
  btn10.style.transition = "1s";

  btn10_span1.style.transform = "translatey(-120%)";
  btn10_span1.style.transition = "0.3s";

  btn10_span2.style.transform = "translatey(0%)";
  btn10_span2.style.transition = "0.3s";
});
btn10.addEventListener("mouseleave", function () {
  btn10.style.transform = "scale(1)";
  btn10.style.transition = "1s";

  btn10_span1.style.transform = "translatey(0%)";
  btn10_span1.style.transition = "0.3s";

  btn10_span2.style.transform = "translatey(120%)";
  btn10_span2.style.transition = "0.3s";
});

// ------------------page9--------------
let btn11 = document.querySelector("#btn11");
let btn11_span1 = document.querySelector("#btn11_span1");
let btn11_span2 = document.querySelector("#btn11_span2");

btn11.addEventListener("mouseenter", function () {
  btn11.style.transform = "scale(1)";
  btn11.style.transition = "1s";

  btn11_span1.style.transform = "translatey(-120%)";
  btn11_span1.style.transition = "0.3s";

  btn11_span2.style.transform = "translatey(0%)";
  btn11_span2.style.transition = "0.3s";
});
btn11.addEventListener("mouseleave", function () {
  btn11.style.transform = "scale(1)";
  btn11.style.transition = "1s";

  btn11_span1.style.transform = "translatey(0%)";
  btn11_span1.style.transition = "0.3s";

  btn11_span2.style.transform = "translatey(120%)";
  btn11_span2.style.transition = "0.3s";
});

// ------------------page9--------------
let btn12 = document.querySelector("#btn12");
let btn12_span1 = document.querySelector("#btn12_span1");
let btn12_span2 = document.querySelector("#btn12_span2");

btn12.addEventListener("mouseenter", function () {
  btn12.style.transform = "scale(1)";
  btn12.style.transition = "1s";

  btn12_span1.style.transform = "translatey(-120%)";
  btn12_span1.style.transition = "0.3s";

  btn12_span2.style.transform = "translatey(0%)";
  btn12_span2.style.transition = "0.3s";
});
btn12.addEventListener("mouseleave", function () {
  btn12.style.transform = "scale(1)";
  btn12.style.transition = "1s";

  btn12_span1.style.transform = "translatey(0%)";
  btn12_span1.style.transition = "0.3s";

  btn12_span2.style.transform = "translatey(120%)";
  btn12_span2.style.transition = "0.3s";
});
