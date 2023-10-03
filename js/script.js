let typed = new Typed('.third-text',{
    strings: ['web designer!','ui designer!', 'web developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
  });

  gsap.fromTo(
    ".loadingpage",
    {opacity:1},
    {
        opacity:0,
        duration:1.5,
        delay:3.5,
    }
);

  // $(document).ready(function(){
  //   $('.menu ul li a').click(function(){
  //     $('li a').removeClass("active");
  //     $(this).addClass("active");
  // });
  // });

  //*
// $(".menubar").on('click','li',function(){
//   // remove classname 'active' from all li who already has classname 'active'
//   $(".menubar li.active").removeClass("active"); 
//   // adding classname 'active' to current click li 
//   $(this).addClass("active"); 
// });
// //*