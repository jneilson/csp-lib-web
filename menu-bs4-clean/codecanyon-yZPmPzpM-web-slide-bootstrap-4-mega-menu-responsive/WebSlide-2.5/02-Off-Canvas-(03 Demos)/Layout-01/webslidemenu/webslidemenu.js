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

    jQuery('.wsmenu > .wsmenu-list > li').has('.sub-menu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>');
    jQuery('.wsmenu > .wsmenu-list > li').has('.wsmegamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>');

    jQuery('.wsmenu-click').click(function () {
      jQuery(this).toggleClass('ws-activearrow')
        .parent().siblings().children().removeClass('ws-activearrow');
      jQuery(".wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu").not(jQuery(this).siblings('.wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu')).slideUp('slow');
      jQuery(this).siblings('.sub-menu').slideToggle('slow');
      jQuery(this).siblings('.wsmegamenu').slideToggle('slow');
    });

    jQuery('.wsmenu > .wsmenu-list > li > ul > li').has('.sub-menu').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>');
    jQuery('.wsmenu > .wsmenu-list > li > ul > li > ul > li').has('.sub-menu').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>');

    jQuery('.wsmenu-click02').click(function () {
      jQuery(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
      jQuery(this).siblings('li > .sub-menu').slideToggle('slow');
    });


    jQuery(window).on('resize', function () {
      jQuery('.wsmenu').css('height', jQuery(this).height() + "px");
      jQuery('.wsmenucontainer').css('min-width', jQuery(this).width() + "px");
    });
    jQuery(window).trigger('resize');


  });

  // Search Box
  jQuery(window).on("load", function () {
    jQuery('.wsmobileheader .wssearch').on("click", function () {
      jQuery(this).toggleClass("wsopensearch");
    });
    jQuery("body, .wsopensearch .wscloseic").on("click", function () {
      jQuery(".wssearch").removeClass('wsopensearch');
    });
    jQuery(".wssearch, .wssearchform form").on("click", function (e) {
      e.stopPropagation();
    });
  });

}());