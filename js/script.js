setTimeout(function(){
    $(".preloader").slideUp();
},1000);


$('.counter').counterUp({
    delay: 10,
    time: 1000
});


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});


$('.slider').slick({
  arrows: false,
  fade: true,
  asNavFor: ".bottom",
})


$('.bottom').slick({
  arrows: true,
  slidesToShow: 3,
  speed: 800,
  centerMode: true,
  centerPadding: "0",
  asNavFor: ".slider",
  prevArrow: '<i class="fas fa-long-arrow-alt-left prev"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})


$(".item-2").mouseenter(function(){
  $(".item-2 .round").css("transform","scale(1)")
  $(".small-2 .round").css("transform","scale(1)")
  $(".line").css("width","38%")
  $(".small-2 h1").css("color","#5f24ef")
  $(".small-2 h1").css("opacity",".4")
})

$(".item-2").mouseleave(function(){
  $(".item-2 .round").css("transform","scale(.8)")
  $(".small-2 .round").css("transform","scale(.5)")
  $(".line").css("width","12%")
  $(".small-2 h1").css("color","#1c0e3e")
  $(".small-2 h1").css("opacity","1")
})


$(".item-3").mouseenter(function(){
  $(".item-2 .round").css("transform","scale(1)")
  $(".small-2 .round").css("transform","scale(1)")
  $(".item-3 .round").css("transform","scale(1)")
  $(".small-3 .round").css("transform","scale(1)")
  $(".line").css("width","62%")
  $(".small-2 h1").css("color","#5f24ef")
  $(".small-2 h1").css("opacity",".4")
  $(".small-3 h1").css("color","#5f24ef")
  $(".small-3 h1").css("opacity",".4")
})

$(".item-3").mouseleave(function(){
  $(".item-2 .round").css("transform","scale(.8)")
  $(".small-2 .round").css("transform","scale(.5)")
  $(".item-3 .round").css("transform","scale(.8)")
  $(".small-3 .round").css("transform","scale(.5)")
  $(".line").css("width","12%")
  $(".small-2 h1").css("color","#1c0e3e")
  $(".small-2 h1").css("opacity","1")
  $(".small-3 h1").css("color","#1c0e3e")
  $(".small-3 h1").css("opacity","1")
})

$(".item-4").mouseenter(function(){
  $(".item-2 .round").css("transform","scale(1)")
  $(".small-2 .round").css("transform","scale(1)")
  $(".item-3 .round").css("transform","scale(1)")
  $(".small-3 .round").css("transform","scale(1)")
  $(".item-4 .round").css("transform","scale(1)")
  $(".small-4 .round").css("transform","scale(1)")
  $(".line").css("width","100%")
  $(".small-2 h1").css("color","#5f24ef")
  $(".small-2 h1").css("opacity",".4")
  $(".small-3 h1").css("color","#5f24ef")
  $(".small-3 h1").css("opacity",".4")
  $(".small-4 h1").css("color","#5f24ef")
  $(".small-4 h1").css("opacity",".4")
})

$(".item-4").mouseleave(function(){
  $(".item-2 .round").css("transform","scale(.8)")
  $(".small-2 .round").css("transform","scale(.5)")
  $(".item-3 .round").css("transform","scale(.8)")
  $(".small-3 .round").css("transform","scale(.5)")
  $(".item-4 .round").css("transform","scale(.8)")
  $(".small-4 .round").css("transform","scale(.5)")
  $(".line").css("width","12%")
  $(".small-2 h1").css("color","#1c0e3e")
  $(".small-2 h1").css("opacity","1")
  $(".small-3 h1").css("color","#1c0e3e")
  $(".small-3 h1").css("opacity","1")
  $(".small-4 h1").css("color","#1c0e3e")
  $(".small-4 h1").css("opacity","1")
})


$(".testi-slider").slick({
  arrows: false,
  fade: true,
  asNavFor: ".bottom-slider",
})

$(".bottom-slider").slick({
  arrows: true,
  slidesToShow: 5,
  asNavFor: ".testi-slider",
  centerMode: true,
  centerPadding: "0",
  prevArrow: '<i class="fas fa-long-arrow-alt-left prev"><h3>See Previous</h3></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-right next"><h3>See Next</h3></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }
  ]
})

$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();
$('#bar5').barfiller();
$('#bar6').barfiller();


$(window).scroll(function(){
  console.log($(window).scrollTop())

  if($(window).scrollTop() > 200){
    $(".menu").addClass("fixd")
  }else{
    $(".menu").removeClass("fixd")
  }

  if($(window).scrollTop() > 200){
    $(".f").addClass("logo-w")
  }else{
    $(".f").removeClass("logo-w")
  }
  
  if($(window).scrollTop() > 200){
    $(".w").addClass("fixd-2")
  }else{
    $(".w").removeClass("fixd-2")
  }

  if($(window).scrollTop() > 600){
    $(".topper").fadeIn()
  }else{
    $(".topper").fadeOut()
  }
})


$(".topper").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})

var scene = document.getElementById('jikimiki');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});