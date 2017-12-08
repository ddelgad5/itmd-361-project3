// Avoid conflicting variables
$.noConflict();

(function($) {
  $('.album').on('click', function (event) {
    console.log("Clicked on an album.  The album is id'd as: ", event.target.id);
  });
})(jQuery);
