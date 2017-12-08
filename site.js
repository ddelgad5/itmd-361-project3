// Avoid conflicting variables
$.noConflict();

var yourtoken = "";
(function($) {


  //Fetch Spotify Token
  $(document).ready(function() {
    $(location).attr('href');
    yourtoken = window.location.hash.substr(1);
    console.log("This is your token:",yourtoken);
  });

  //Verify Token and Fetch Tracklist
  $('.album').click(function(event) {
    if (yourtoken == ""){
      console.log("yourtoken is null");
      document.location.href= "https://accounts.spotify.com/authorize?client_id=2712479b9c5f4b4da5ba43507064c8eb&redirect_uri=http://daviddelgado.co/music&response_type=token";
    }
    else {
      console.log("Clicked on an album.  The album is id'd as:", $(this).attr('data-id'));
      var albumid = $(this).attr('data-id');
      var url1 = "https://api.spotify.com/v1/albums/"+albumid+"/tracks";
      $.ajax({
        url: url1,
        data: { "signature": "authHeader" },
        type: "GET",
        headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": "Bearer "+yourtoken
        },
        success: function(data) {
         console.log(data);
        }
      });
    }
  });

})(jQuery);

// Implicit Grant Flow URL
// https://accounts.spotify.com/authorize?client_id=2712479b9c5f4b4da5ba43507064c8eb&redirect_uri=http://daviddelgado.co/music&response_type=token
