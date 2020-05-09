/* global jQuery */
/* global document */

jQuery(function () {
  'use strict';

  document.addEventListener("touchstart", function () {}, false);
  jQuery(function () {

    jQuery('<div class="overlapblackbg02"></div>').prependTo('.wsmenu02');
    jQuery('#wsnavtoggle02').click(function () {
      jQuery('body').toggleClass('wsactive02');
    });

    jQuery('.overlapblackbg02').click(function () {
      jQuery("body").removeClass('wsactive02');
    });

    jQuery('.wsmenu02 > .wsmenu02-list > li').has('.sub-menu02').prepend('<span class="wsmenu02-click"><i class="wsmenu-arrow02"></i></span>');
    jQuery('.wsmenu02 > .wsmenu02-list > li').has('.wsmegamenu02').prepend('<span class="wsmenu02-click"><i class="wsmenu-arrow02"></i></span>');

    jQuery('.wsmenu02-click').click(function () {
      jQuery(this).toggleClass('ws-activearrow')
        .parent().siblings().children().removeClass('ws-activearrow');
      jQuery(".wsmenu02 > .wsmenu02-list > li > .sub-menu02, .wsmegamenu02").not(jQuery(this).siblings('.wsmenu02 > .wsmenu02-list > li > .sub-menu02, .wsmegamenu02')).slideUp('slow');
      jQuery(this).siblings('.sub-menu02').slideToggle('slow');
      jQuery(this).siblings('.wsmegamenu02').slideToggle('slow');
    });

    jQuery('.wsmenu02 > .wsmenu02-list > li > ul > li').has('.sub-menu02').prepend('<span class="wsmenu02-click02"><i class="wsmenu-arrow02"></i></span>');
    jQuery('.wsmenu02 > .wsmenu02-list > li > ul > li > ul > li').has('.sub-menu02').prepend('<span class="wsmenu02-click02"><i class="wsmenu-arrow02"></i></span>');

    jQuery('.wsmenu02-click02').click(function () {
      jQuery(this).children('.wsmenu-arrow02').toggleClass('wsmenu02-rotate');
      jQuery(this).siblings('li > .sub-menu02').slideToggle('slow');
    });

    jQuery(window).on('resize', function () {

      if (jQuery(window).outerWidth() < 992) {
        jQuery('.wsmenu02').css('height', jQuery(this).height() + "px");
        jQuery('.wsmenucontainer').css('min-width', jQuery(this).width() + "px");
      } else {
        jQuery('.wsmenu02').removeAttr("style");
        jQuery('.wsmenucontainer').removeAttr("style");
        jQuery('body').removeClass("wsactive");
        jQuery('.wsmenu02 > .wsmenu02-list > li > .wsmegamenu02, .wsmenu02 > .wsmenu02-list > li > ul.sub-menu02, .wsmenu02 > .wsmenu02-list > li > ul.sub-menu02 > li > ul.sub-menu02, .wsmenu02 > .wsmenu02-list > li > ul.sub-menu02 > li > ul.sub-menu02 > li > ul.sub-menu02').removeAttr("style");
        jQuery('.wsmenu02-click').removeClass("ws-activearrow");
        jQuery('.wsmenu02-click02 > i').removeClass("wsmenu02-rotate");
      }

    });

    jQuery(window).trigger('resize');

  });

}());