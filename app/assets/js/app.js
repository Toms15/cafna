$(document).foundation();
$(document).ready(function() {

  // ----------------------------------------
  // Cookie Bar
  // ----------------------------------------
  $.cookieBar({
   message: "If you click on the OK button, you accept the use of third-party cookies. For more information, also with regard to deactivation, it is possible to consult the <a class='cookie-link-2' href='/cookie.html'>complete cookie policy</a>.",
   acceptText: 'Ok',
   fixed: true,
   bottom: true
  });

 	// ----------------------------------------
  // Toggle Header Menu Mobile
  // ----------------------------------------
  $('.mobile__menu').on('click', function() {
  	$('.entry__menu').toggleClass('show');
  	$('.mobile__menu').toggleClass('shrink');
  });

  // ----------------------------------------
  // Swiper
  // ----------------------------------------
  var mySwiper = new Swiper('.home__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade'
  });

  var mySwiper = new Swiper('.stores__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,

    breakpoints: {
        // when window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is <= 640px
        780: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50
        }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  // ----------------------------------------
  // Pop up share
  // ----------------------------------------
  $('.pop').click(function(event){
    event.preventDefault();
    // console.log('clicked');

    newwindow=window.open(jQuery(this).attr('href'),'name','height=450,width=550');
    if (window.focus) {newwindow.focus()}
      return false;
  });

  // ----------------------------------------
  // Fix Footer on bottom page
  // ----------------------------------------
  function fixfooter()
  { 

   if(jQuery('footer').length > 0){

     var docHeight = jQuery(window).height();
     var footerHeight = jQuery('footer').height();
     var footerTop = jQuery('footer').position().top + footerHeight;

     if (footerTop < docHeight) {

      jQuery('footer').css('margin-top', (docHeight - footerTop - 1) + 'px');
    }
  }
  }

  if (jQuery(window).width() > 767) {
    fixfooter();  
  }

  jQuery(window).resize(function() {
    fixfooter();  
  })

  // ----------------------------------------
  // Google Maps
  // ----------------------------------------
  $(function() {
    function initialize() {
      var mapOptions = {
        center: new google.maps.LatLng(41.906300,12.480809),
        zoom: 12,
        scrollwheel: false,
        styles: [
          {
              "featureType": "administrative.country",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "simplified"
                  },
                  {
                      "hue": "#ff0000"
                  }
              ]
          }
      ]
      };
      var map = new google.maps.Map(document.getElementById("map-ris34"),
        mapOptions);

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.906300,12.480809),
        map: map
      });
    }
    // google.maps.event.addDomListener(window, 'load', initialize);

    if($('#cookie-bar').length) {
      $('.cb-enable').on('click', initialize);
    } else {
      initialize();
    }

  });

  $(".language a").click(function(event){
    event.preventDefault();
    var newLang = $(this).data("lang");
    var urlPieces = window.location.pathname.split( '/' );
    var langs = ['eng', 'ita', 'jap', 'rus'];
    if(newLang == 'ita'){
      if(urlPieces.length == 2 && !langs.includes(urlPieces[1])){
          window.location.href = '/' + urlPieces[1];
      }
      if(urlPieces.length == 3 && !langs.includes(urlPieces[2]) &&  langs.includes(urlPieces[1])){
          window.location.href = '/' + urlPieces[2];
      }
    }else{
      if(urlPieces.length == 2 && !langs.includes(urlPieces[1])){
          window.location.href = '/' + newLang + '/' + urlPieces[1];
      }
      if(urlPieces.length == 3 && !langs.includes(urlPieces[2]) &&  langs.includes(urlPieces[1])){
          window.location.href = '/' + newLang + '/' + urlPieces[2];
      }
    }
  });

});



