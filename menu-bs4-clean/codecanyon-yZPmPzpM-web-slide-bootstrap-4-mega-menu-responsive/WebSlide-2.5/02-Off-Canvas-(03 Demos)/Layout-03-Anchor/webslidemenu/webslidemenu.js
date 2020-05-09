 /* global jQuery */
 /* global document */

 jQuery(function () {
   'use strict';

   document.addEventListener("touchstart", function () {}, false);
   jQuery(function () {

     jQuery('body').wrapInner('<div class="wsmenucontainer" />');
     jQuery('<div class="overlapblackbg"></div>').prependTo('.wsmenu');

     jQuery('#wsnavtoggle').click(function () {
       jQuery('body').toggleClass('wsactive');
     });

     jQuery('.overlapblackbg').click(function () {
       jQuery("body").removeClass('wsactive');
     });


     jQuery('.wsmenu > .wsmenu-list > li > a').on('click', function () {
       jQuery('body').removeClass('wsactive');
       return false;
     });




     jQuery(".wsmenu > .wsmenu-list > li > a").on('click', function (event) {
       if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         jQuery('html, body').animate({
           scrollTop: jQuery(hash).offset().top
         }, 800, function () {
           window.location.hash = hash;
         });
       }
     });
     return false;


   });


   // Search Box
   jQuery(window).on("load", function () {
     jQuery('.wsmobileheader .wssearch').on("click", function () {
       jQuery(this).toggleClass("wsopensearch");
     });
     jQuery("body, .wsopensearch .wscloseicon").on("click", function () {
       jQuery(".wssearch").removeClass('wsopensearch');
     });
     jQuery(".wssearch, .wssearchform form").on("click", function (e) {
       e.stopPropagation();
     });
   });


 }());