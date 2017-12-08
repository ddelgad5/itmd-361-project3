// Avoid conflicting variables
$.noConflict();

(function($) {

  //Fetch album songs
  $('.album').click(function(event) {
    console.log("Clicked on an album.  The album is id'd as:", $(this).attr('id'));
    var mytoken = "BQAHKAIeAVXqXxQOEZYsOjnP5p7o2lQ85U6GrwxzW-S6Us9CAxCWYlIyUfBER4l61JAgHDN_AyhRhU8eZtzlLo4sCYCa1KviYY1WFr2DBbYgBBNuP-xYQiV9EHU-z5d1qgHKaXiQ2bfu5ZY";
    var albumid = $(this).attr('id');
    var url1 = "https://api.spotify.com/v1/albums/"+albumid+"/tracks";
    $.ajax({
         url: url1,
         data: { "signature": "authHeader" },
         type: "GET",
         headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
           "Authorization": "Bearer "+mytoken,
         },
         success: function(data) {
           console.log(data);
         }
      });
  });

})(jQuery);
