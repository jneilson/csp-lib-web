/* global jQuery */
/* global document */

jQuery(function () {
  'use strict';

  document.addEventListener("touchstart", function () {}, false);
  jQuery(function () {

    jQuery('.wsmenu').append(jQuery('<a class="wsdownmenu-animated-arrow"><span></span></a>'));
    jQuery('.wsmenu').append(jQuery('<div class="wsdownmenu-text">Navigation</div>'));
    jQuery('.wsdownmenu-animated-arrow').on('click', function () {
      jQuery('.wsmenu-list').slideToggle('slow');
      jQuery(this).toggleClass('wsdownmenu-lines');
      return false;
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
      if (jQuery(window).width() < 992) {} else {
        jQuery('.wsmenu-list').removeAttr("style");
        jQuery('.wsdownmenu-animated-arrow').removeClass("wsdownmenu-lines");
        jQuery('.wsmenu > .wsmenu-list > li > .wsmegamenu, .wsmenu > .wsmenu-list > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu').removeAttr("style");
        jQuery('.wsmenu-click').removeClass("ws-activearrow");
        jQuery('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
      }
    });
    jQuery(window).trigger('resize');

  });



}());