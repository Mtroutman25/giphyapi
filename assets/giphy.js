var gifs = ["Madden", "Destiny", "Elder Scrolls Online", "Overwatch", "FIFA", "Marvel vs. Capcom", "Super Meatboy", "Mario", "Nintendo", "Playstation", "Xbox", "Arcade", "Mortal Kombat", "Injustice", "Star Wars"]

function displayGifs() {

	 var gif = $(this).attr("data-name");

     var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=4abc1d11985348d3bf57e3b4edd91c79&q=" + gif + "&limit=25&offset=0&rating=PG&lang=en";

        $.ajax({
          url: queryUrl,
          method: "GET"

        }).done(function(response) {
          console.log(response);

          var newDiv = $("<div>");


          //append gifs from giphy api to page 
         $("<img>").attr("src", response.data).appendTo(newDiv)

        });

}

function renderButtons() {

       
        $("#gif-buttons").empty();
      
        for (var i = 0; i < gifs.length; i++) {

          
          var a = $("<button>");
          
          a.addClass("gif");
          
          a.attr("data-name", gifs[i]);
          
          a.text(gifs[i]);
          
          $("#gif-buttons").append(a);
        }
      }

       $("#add-gif").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var gif = $("#gif-input").val().trim();

        // The movie from the textbox is then added to our array
        gifs.push(gif);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding click event listeners to all elements with a class of "movie"
      $(document).on("click", ".gif", displayGifs);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

          

