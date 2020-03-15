$(function () {
  // $(document).scroll(function () {
  //     var $nav = $(".navbar-fixed-top");
  //     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  // });

  $('.nonloop').owlCarousel({
    center: true,
    items: 3,
    nav: true,
    dots: false,
    loop: false,
    margin: 10,
    navText: ["<button type='button' class='btn btn-outline-light prev-slide'><span class='fa fa-long-arrow-left'></span></button>",
      "<button type='button' class='btn btn-outline-light next-slide'><span class='fa fa-long-arrow-right'></span></button>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

  var owl = $('.clients-carousel');
  owl.owlCarousel({
    items: 2,
    nav: true,
    navText: ["<button type='button' class='btn btn-outline-light prev-slide'><span class='fa fa-long-arrow-left'></span></button>",
      "<button type='button' class='btn btn-outline-light next-slide'><span class='fa fa-long-arrow-right'></span></button>"],
    dots: false,
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      }
    }
  });

  //Show Tab-Content
  $('.nav-link-tabs').click(function () {
    var i, navlinks;
    navlinks = $(".nav-link-tabs");
    $('.nav-link-tabs').removeClass('navtabactive');
    // $('.tab-content').hide();

    for (i = 0; i < navlinks.length; i++) {
      $(this).addClass('navtabactive');
      $($(this).attr("href")).show();
    }
  });
});

//scroll on top
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
