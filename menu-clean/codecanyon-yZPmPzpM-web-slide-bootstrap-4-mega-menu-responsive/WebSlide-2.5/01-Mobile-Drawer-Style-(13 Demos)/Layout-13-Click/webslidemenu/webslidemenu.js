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

    //Main Menu Link
    jQuery(".wsmenu>.wsmenu-list>li>a").on('click', function () {
      jQuery(this).parent().toggleClass("wsclickopen").siblings(this).removeClass("wsclickopen");
      jQuery(".wsmenu>.wsmenu-list>li>ul.sub-menu>li").removeClass('wsclickopen-sub');
      jQuery(".wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li").removeClass('wsclickopen-sub-sub');
    });

    jQuery(".wsmenu>.wsmenu-list>li>.sub-menu>li>a").on('click', function () {
      jQuery(this).parent().toggleClass("wsclickopen-sub").siblings(this).removeClass("wsclickopen-sub");
    });

    jQuery(".wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>a").on('click', function () {
      jQuery(this).parent().toggleClass("wsclickopen-sub-sub").siblings(this).removeClass("wsclickopen-sub-sub");
    });

    jQuery(".wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li>a").on('click', function () {
      jQuery(this).parent().toggleClass("wsclickopen-sub-sub-sub").siblings(this).removeClass("wsclickopen-sub-sub-sub");
    });

    jQuery(document).on("click", function (event) {
      var $trigger = $(".wsmegamenu");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        jQuery(".wsmenu>.wsmenu-list>li").removeClass("wsclickopen");
      }
    });

    jQuery(".wsmenu>.wsmenu-list>li>a").click(function (e) {
      e.stopPropagation();
    });

    jQuery(".wsmenu>.wsmenu-list>li>.sub-menu>li>a, .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>a, .wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li>ul.sub-menu>li>a").click(function (e) {
      e.stopPropagation();
    });

    jQuery(window).on('resize', function () {
      if (jQuery(window).outerWidth() < 992) {
        jQuery('.wsmenu').css('height', jQuery(this).height() + "px");
        jQuery('.wsmenucontainer').css('min-width', jQuery(this).width() + "px");
      } else {
        jQuery('.wsmenu').removeAttr("style");
        jQuery('.wsmenucontainer').removeAttr("style");
        jQuery('body').removeClass("wsactive");
        jQuery('.wsmenu>.wsmenu-list>li').removeClass("wsclickopen");
        jQuery(".wsmenu>.wsmenu-list>li>ul.sub-menu>li").removeClass('wsclickopen-sub');
        jQuery(".wsmenu>.wsmenu-list>li>ul.sub-menu>li>ul.sub-menu>li").removeClass('wsclickopen-sub-sub');
      }
    });
    jQuery(window).trigger('resize');

  });

  //Mobile Search Box
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