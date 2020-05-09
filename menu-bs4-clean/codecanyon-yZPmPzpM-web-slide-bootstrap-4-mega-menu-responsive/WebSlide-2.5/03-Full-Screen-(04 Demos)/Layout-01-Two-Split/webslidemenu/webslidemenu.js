/* global $ */
/* global document */

(function() {
  'use strict';
  $(document).ready(function() {
    $('#wstoggle').on('click', function() {
      $('body').toggleClass('wsfopen');
      return false;
    });
  });
}());