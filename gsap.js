let t1 = gsap.timeline();

t1.to("#page-1", {
  height: 0,
  duration: 3,
  ease: Expo.easeInOut,
});

t1.to("#page-1_bo", {
  opacity: 0,
  duration: 3,
  delay: -3,
  ease: Expo.easeInOut,
});

t1.to("#page0", {
  height: "100%",
  duration: 3,
  delay: -3,
  ease: Expo.easeInOut,
});
t1.to("#page1", {
  height: "100vh",
  duration: 3,
  delay: -2.2,
  ease: Expo.easeInOut,
});

t1.from("#page1_content_box1", {
  x: 1100,
  duration: 3,
  delay: -2.2,
  ease: Expo.easeInOut,
});
t1.from("#page1_content_box2", {
  x: 1400,
  duration: 3,
  delay: -2.2,
  ease: Expo.easeInOut,
});
t1.from("#page1_content_box3", {
  x: 1300,
  duration: 3,
  delay: -2.2,
  ease: Expo.easeInOut,
});

gsap.from("#btn1", {
  scrollTrigger: {
    trigger: "#btn1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
  },
  opacity: 0,
  duration: 1,
  y: 200,
});
gsap.from("#page3_box1_right>h1", {
  scrollTrigger: {
    trigger: "#page3_box1_right>h1",
    scroller: "#main",
    // markers:true,
    start: "top 95%",
  },
  onStart: function () {
    $("#page3_box1_right>h1").textillate({ in: { effect: "flipInX" } });
  },
});

gsap.from("#page3_box2_left>h1", {
  scrollTrigger: {
    trigger: "#page3_box2_left>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
  },
  onStart: function () {
    $("#page3_box2_left>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
});
gsap.from("#page3_box2_left>h2", {
  scrollTrigger: {
    trigger: "#page3_box2_left>h2",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
  },
  onStart: function () {
    $("#page3_box2_left>h2").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
});

gsap.from("#page3_box2_right>h1", {
  scrollTrigger: {
    trigger: "#page3_box2_right>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
  },
  onStart: function () {
    $("#page3_box2_right>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
});
gsap.from("#btn2", {
  scrollTrigger: {
    trigger: "#btn2",
    scroller: "#main",
    // markers:true,
    start: "top 90%",
  },
  opacity: 0,
  duration: 1,
  y: 200,
});

gsap.from("#page4_center_top>h1", {
  scrollTrigger: {
    trigger: "#page4_center_top>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
  },
  onStart: function () {
    $("#page4_center_top>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
});
gsap.from("#page4_center_top3>h1", {
  scrollTrigger: {
    trigger: "#page4_center_top3>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page4_center_top3>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});
gsap.from("#page4_center_top5>h1", {
  scrollTrigger: {
    trigger: "#page4_center_top5>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page4_center_top5>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});
gsap.from("#page4_center_top7>h1", {
  scrollTrigger: {
    trigger: "#page4_center_top7>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page4_center_top7>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page4_right_top2>h1", {
  scrollTrigger: {
    trigger: "#page4_right_top2>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page4_right_top2>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page4_right_top4>h1", {
  scrollTrigger: {
    trigger: "#page4_right_top4>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page4_right_top4>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page4_right_top6>h1", {
  scrollTrigger: {
    trigger: "#page4_right_top6>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page4_right_top6>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});
gsap.from("#page4_right_top8>h1", {
  scrollTrigger: {
    trigger: "#page4_right_top8>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page4_right_top8>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

//----------------------------------
gsap.from("#page5_center_top>h1", {
  scrollTrigger: {
    trigger: "#page5_center_top>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page5_center_top>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page5_center_top3>h1", {
  scrollTrigger: {
    trigger: "#page5_center_top3>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page5_center_top3>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page5_center_top5>h1", {
  scrollTrigger: {
    trigger: "#page5_center_top5>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page5_center_top5>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page5_center_top7>h1", {
  scrollTrigger: {
    trigger: "#page5_center_top7>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page5_center_top7>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page5_right_top2>h1", {
  scrollTrigger: {
    trigger: "#page5_right_top2>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page5_right_top2>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page5_right_top4>h1", {
  scrollTrigger: {
    trigger: "#page5_right_top4>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page5_right_top4>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page5_right_top6>h1", {
  scrollTrigger: {
    trigger: "#page5_right_top6>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page5_right_top6>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page5_right_top8>h1", {
  scrollTrigger: {
    trigger: "#page5_right_top8>h1",
    scroller: "#main",
    // markers:true,
    start: "top 80%",
    end: "bottom 99%",
  },
  onStart: function () {
    $("#page5_right_top8>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

// -----------page6------
gsap.from("#page6_box1>h1", {
  scrollTrigger: {
    trigger: "#page6_box1>h1",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page6_box1>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from(".line2", {
  scrollTrigger: {
    trigger: ".line2",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  opacity: 0,
  duration: 1.7,
  x: -200,
});
gsap.from(".line3", {
  scrollTrigger: {
    trigger: ".line3",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  opacity: 0,
  duration: 1.6,
  x: -300,
});
gsap.from(".line4", {
  scrollTrigger: {
    trigger: ".line4",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  opacity: 0,
  duration: 1.5,
  x: -400,
});
gsap.from(".line5", {
  scrollTrigger: {
    trigger: ".line5",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  opacity: 0,
  duration: 1.4,
  x: -500,
});
gsap.from(".line6", {
  scrollTrigger: {
    trigger: ".line6",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  opacity: 0,
  duration: 1.3,
  x: -500,
});
gsap.from(".line7", {
  scrollTrigger: {
    trigger: ".line7",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  opacity: 0,
  duration: 1.2,
  x: -500,
});
gsap.from(".line8", {
  scrollTrigger: {
    trigger: ".line7",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  opacity: 0,
  duration: 1,
  x: -500,
});

gsap.from("#page6_box2_text1>h1", {
  scrollTrigger: {
    trigger: "#page6_box2_text1>h1",
    scroller: "#main",
    // markers:true,
    start: "top 85%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page6_box2_text1>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page6_box2_text2>h1", {
  scrollTrigger: {
    trigger: "#page6_box2_text2>h1",
    scroller: "#main",
    // markers:true,
    start: "top 93%",
    end: "bottom 85%",
  },
  opacity: 0,
  duration: 1,
  y: 200,
});

gsap.from("#page6_box2_text3>h1", {
  scrollTrigger: {
    trigger: "#page6_box2_text3>h1",
    scroller: "#main",
    // markers:true,
    start: "top 95%",
    end: "bottom 85%",
  },
  opacity: 0,
  duration: 1,
  y: 200,
});

gsap.from("#page7_right_box1_left>h2", {
  scrollTrigger: {
    trigger: "#page7_right_box1_left>h2",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page7_right_box1_left>h2").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page7_right_box1_right>h2", {
  scrollTrigger: {
    trigger: "#page7_right_box1_right>h2",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page7_right_box1_right>h2").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page7_right_box2_left>h2", {
  scrollTrigger: {
    trigger: "#page7_right_box2_left>h2",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page7_right_box2_left>h2").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page7_right_box2_center>h2", {
  scrollTrigger: {
    trigger: "#page7_right_box2_center>h2",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page7_right_box2_center>h2").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page7_right_box2_right>h2", {
  scrollTrigger: {
    trigger: "#page7_right_box2_right>h2",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page7_right_box2_right>h2").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page7_right_box3_left>h1", {
  scrollTrigger: {
    trigger: "#page7_right_box3_left>h1",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page7_right_box3_left>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page7_right_box3_center>h2", {
  scrollTrigger: {
    trigger: "#page7_right_box3_center>h2",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page7_right_box3_center>h2").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page7_right_box3_right>h2", {
  scrollTrigger: {
    trigger: "#page7_right_box3_right>h2",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page7_right_box3_right>h2").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page8_left>h1", {
  scrollTrigger: {
    trigger: "#page8_left>h1",
    scroller: "#main",
    // markers:true,
    start: "top 75%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page8_left>h1").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});
gsap.from("#page8_left>h2", {
  scrollTrigger: {
    trigger: "#page8_left>h2",
    scroller: "#main",
    // markers:true,
    start: "top 78%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page8_left>h2").textillate({ in: { effect: "fadeInUp" } });
  },
  opacity: 0,
  duration: 1,
});

gsap.from("#page9_box1>h1", {
  scrollTrigger: {
    trigger: "#page9_box1>h1",
    scroller: "#main",
    // markers:true,
    start: "top 78%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page9_box1>h1").textillate({ in: { effect: "flipInX" } });
  },
  opacity: 0,
  duration: 1,
});
gsap.from("#page9_box1>h2", {
  scrollTrigger: {
    trigger: "#page9_box1>h2",
    scroller: "#main",
    // markers:true,
    start: "top 78%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page9_box1>h2").textillate({ in: { effect: "flipInX" } });
  },
  opacity: 0,
  duration: 1,
});
gsap.from("#page9_box1>h3", {
  scrollTrigger: {
    trigger: "#page9_box1>h3",
    scroller: "#main",
    // markers:true,
    start: "top 78%",
    end: "bottom 85%",
  },
  onStart: function () {
    $("#page9_box1>h3").textillate({ in: { effect: "flipInX" } });
  },
  opacity: 0,
  duration: 1,
});

// -------------------------menubar----------------------------
let menubar = document.querySelector("#menubar");
let nav_top_i = document.querySelector("#nav_top>i");
let crossmenu = document.querySelector("#crossmenu");

nav_top_i.addEventListener("click", function () {
  menubar.style.transform = "translateY(-0%)";
  menubar.style.transition = "1";
});

crossmenu.addEventListener("click", function () {
  menubar.style.transform = "translateY(-300%)";
  menubar.style.transition = "0.5";
});
