$(document).foundation();
$(document).ready(function() {

  // ----------------------------------------
  // Cookie Bar
  // ----------------------------------------
  $.cookieBar({
   message: "Cliccando su OK, l’utente accetta l’utilizzo dei cookie di terze parti. Per maggiori informazioni, anche in ordine alla disattivazione, è possibile consultare l'<a class='cookie-link-2' href='/cookie.html'>informativa cookie completa</a>.",
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
  // Switch Language
  // ----------------------------------------
  $(".header__site--language a").click(function(event){
    event.preventDefault();
    var newLang = $(this).data("lang");
    var urlPieces = window.location.pathname.split( '/' );
    var langs = ['en', 'it'];
    if(newLang == 'it'){
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
          spaceBetween: 0
        },
        // when window width is <= 640px
        780: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0
        }
    },

    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var mySwiper = new Swiper('.hot-menu__slider', {
    direction: 'vertical',
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 4000,
    }
  });

  var mySwiper = new Swiper('.cold-menu__slider', {
    direction: 'vertical',
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 5500,
    }
  });

  // ----------------------------------------
  // Toggle Header Menu Mobile
  // ----------------------------------------
  $('.stores__info h3 > .open__content').on('click', function() {
    $(this).parent().parent().toggleClass('show');
    // $('.stores__info').toggleClass('show');
    $(this).toggleClass('is--rotate');
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
  function initialize(){
    var locations = [
          ['Porta Vittoria', 45.462436, 9.203992, 1],
          ['Coni Zugna', 45.456259, 9.171167, 2],
          ['Pisani', 45.481264, 9.200074, 3],
          ['Turati', 45.476972, 9.195799, 4],
          ['Giardino', 45.462918, 9.189021, 5],
          ['Brera', 45.478238, 9.184551, 6],
          ['Buonaparte', 45.468323, 9.178320, 7],
          ['Montenero', 45.461098, 9.207319, 8],
          ['Magenta', 45.466209, 9.176864, 9],
          ['Largo Augusto', 45.462928, 9.196952, 10],
          ['Marghera', 45.466874, 9.152020, 11],
          ['Ticinese', 45.459429, 9.181041, 12],
          ['Porta Nuova', 45.482318, 9.193439, 13],
          ['Santa Croce', 45.456536, 9.183384, 14],
          ['Londra', 51.519656, -0.134960, 15],
        ];

        var map = new google.maps.Map(document.getElementById('map-caffenapoli'), {
          zoom: 14,
          center: new google.maps.LatLng(45.470480, 9.190176),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
          {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
            {
              "visibility": "on"
            },
            {
              "color": "#716464"
            },
            {
              "weight": "0.01"
            }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "poi.attraction",
            "elementType": "geometry",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
            {
              "visibility": "off"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "color": "#a05519"
            },
            {
              "saturation": "-13"
            }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
            {
              "visibility": "simplified"
            }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "color": "#84afa3"
            },
            {
              "lightness": 52
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
            {
              "visibility": "on"
            }
            ]
          }
          ]
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {  
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
  }

  if($('#cookie-bar').length) {
    $('.cb-enable').on('click', initialize);
  } else {
    initialize();
  }

});



