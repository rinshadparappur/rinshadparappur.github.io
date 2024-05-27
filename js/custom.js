// $('.variable-width').slick({
//   dots: true,
//   arrows:false,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   Speed:1000,
//   autoplay: true,
//   cssEase: 'linear'
//   });

  $('.variable-width').slick({
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    Speed:1000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
 ] });


  $(".readmorebt").click(function(){
  $(".lines").addClass("display");
});


  // Back to top
  var amountScrolled = 400;
  var amountScrolledNav = 25;
  
  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('.hovertop_btn').addClass('show');
    } else {
      $('.hovertop_btn').removeClass('show');
    }
  });
  
  $('.hovertop_btn').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    return false;
  });





  $(document).ready(function() {

    /* This is basic - uses default settings */
    
    $("a#single_image").fancybox();
    
    /* Using custom settings */
    
    $("a#inline").fancybox({
      'hideOnContentClick': true
    });
    
  
    /* Apply fancybox to multiple items */
    
    $("a.group").fancybox({
      'transitionIn'	:	'elastic',
      'transitionOut'	:	'elastic',
      'speedIn'		:	600, 
      'speedOut'		:	200, 
      'overlayShow'	:	false
    });
    
  });

