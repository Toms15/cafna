$(document).foundation(),$(document).ready(function(){function e(){if(jQuery("footer").length>0){var e=jQuery(window).height(),i=jQuery("footer").height(),t=jQuery("footer").position().top+i;t<e&&jQuery("footer").css("margin-top",e-t-1+"px")}}function i(){var e,i,t=[["Porta Vittoria",45.462436,9.203992,1,"www.google.com"],["Coni Zugna",45.456259,9.171167,2,"www.google.com"],["Pisani",45.481264,9.200074,3,"www.google.com"],["Turati",45.476972,9.195799,4,"www.google.com"],["Giardino",45.462918,9.189021,5,"www.google.com"],["Brera",45.478238,9.184551,6,"www.google.com"],["Buonaparte",45.468323,9.17832,7,"www.google.com"],["Montenero",45.461098,9.207319,8,"www.google.com"],["Magenta",45.466209,9.176864,9,"www.google.com"],["Largo Augusto",45.462928,9.196952,10,"www.google.com"],["Marghera",45.466874,9.15202,11,"www.google.com"],["Ticinese",45.459429,9.181041,12,"www.google.com"],["Porta Nuova",45.482318,9.193439,13,"www.google.com"],["Santa Croce",45.456536,9.183384,14,"www.google.com"],["Londra",51.519656,-.13496,15,"www.google.com"]],o=new google.maps.Map(document.getElementById("map-caffenapoli"),{zoom:14,center:new google.maps.LatLng(45.47048,9.190176),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"administrative",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{visibility:"on"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"},{color:"#716464"},{weight:"0.01"}]},{featureType:"administrative.country",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"landscape.natural.landcover",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"geometry.stroke",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{visibility:"simplified"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{visibility:"simplified"}]},{featureType:"poi.attraction",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"simplified"},{color:"#a05519"},{saturation:"-13"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"transit",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"simplified"},{color:"#84afa3"},{lightness:52}]},{featureType:"water",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{visibility:"on"}]}]}),l=new google.maps.InfoWindow;for(i=0;i<t.length;i++)e=new google.maps.Marker({position:new google.maps.LatLng(t[i][1],t[i][2]),map:o,url:"https://www.google.com/maps/search/"+t[i][1]+","+t[i][2]}),google.maps.event.addListener(e,"click",function(e,i){return function(){l.setContent("<strong>"+t[i][0]+"</strong><br><a href='"+e.url+"' target='_blank'>Come raggiungerci</a>"),l.open(o,e)}}(e,i))}$.cookieBar({message:"Cliccando su OK, l’utente accetta l’utilizzo dei cookie di terze parti. Per maggiori informazioni, anche in ordine alla disattivazione, è possibile consultare l'<a class='cookie-link-2' href='/cookie.html'>informativa cookie completa</a>.",acceptText:"Ok",fixed:!0,bottom:!0}),AOS.init({disable:"mobile"}),$(".mobile__menu").on("click",function(){$(".entry__menu").toggleClass("show"),$(".mobile__menu").toggleClass("shrink")}),$(".header__site--language a").click(function(e){e.preventDefault();var i=$(this).data("lang"),t=window.location.pathname.split("/"),o=["en","it"];"it"==i?(2!=t.length||o.includes(t[1])||(window.location.href="/"+t[1]),3==t.length&&!o.includes(t[2])&&o.includes(t[1])&&(window.location.href="/"+t[2])):(2!=t.length||o.includes(t[1])||(window.location.href="/"+i+"/"+t[1]),3==t.length&&!o.includes(t[2])&&o.includes(t[1])&&(window.location.href="/"+i+"/"+t[2]))}),$(".entry__menu--language a").click(function(e){e.preventDefault();var i=$(this).data("lang"),t=window.location.pathname.split("/"),o=["en","it"];"it"==i?(2!=t.length||o.includes(t[1])||(window.location.href="/"+t[1]),3==t.length&&!o.includes(t[2])&&o.includes(t[1])&&(window.location.href="/"+t[2])):(2!=t.length||o.includes(t[1])||(window.location.href="/"+i+"/"+t[1]),3==t.length&&!o.includes(t[2])&&o.includes(t[1])&&(window.location.href="/"+i+"/"+t[2]))});new Swiper(".home__slider",{direction:"horizontal",loop:!0,spaceBetween:0,autoplay:{delay:5e3},effect:"fade"}),new Swiper(".stores__slider",{direction:"horizontal",loop:!0,slidesPerView:4,centeredSlides:!0,breakpoints:{480:{slidesPerView:1,spaceBetween:0},780:{slidesPerView:2,spaceBetween:0},1024:{slidesPerView:3,spaceBetween:0}},autoplay:{delay:5e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".hot-menu__slider",{direction:"vertical",loop:!0,spaceBetween:0,autoplay:{delay:4e3}}),new Swiper(".cold-menu__slider",{direction:"vertical",loop:!0,spaceBetween:0,autoplay:{delay:5500}});$(".open__content").on("click",function(){$(this).parent().toggleClass("show"),$(this).toggleClass("is--rotate")}),$(".stores__info").on("click",function(){$(this).toggleClass("show"),$(this).find(".open__content").toggleClass("is--rotate")}),$(".pop").click(function(e){return e.preventDefault(),newwindow=window.open(jQuery(this).attr("href"),"name","height=450,width=550"),window.focus&&newwindow.focus(),!1}),jQuery(window).width()>767&&e(),jQuery(window).resize(function(){e()}),$("#cookie-bar").length?$(".cb-enable").on("click",i):i()});