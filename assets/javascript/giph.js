//Javascript

$(document).ready(function(){

var giphGoHere = $('#giphsGoHere');

let starWarsCharacters = [
    'Master Yoda',
    'Obi-Wan Kenobi',
    'Qui Gon Jinn ',
    'Anakin Skywalker',
    'Darth Vader',
    'Luke Skywalker',
    'Princess Leah',
    'Darth Sidious',
    'Ahsoka Tano',
    'Darth Maul',
    'Rey',
    'Kylo Ren',
    'BB-8',
];

// Adding click event listen listener to all buttons
$("button").on("click", function(event) {
    //grabs and stores the characters type value from the button
    let cast = $(this).attr("value");
        $('#giphsDiv').remove()

//

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cast
     + "&api_key=4EDRtUmmJKZKDA1pCiiVlPhQEGz4096l";



     $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(responce){
        let results = responce.data
        var giphDiv = $('<div>')
        giphDiv.attr('id', 'giphsDiv')
        giphGoHere.append(giphDiv)

        
      
            for (var i = 0; i < results.length; i++) {
                var giphDiv = $('<div>')
                var p = $("<p>").text("Rating: " + results[i].rating);
              
    
                
                var giphImage = $('<img>')
                giphImage.attr('src', results[i].images.original_still.url)
                giphImage.addClass('gif')
                giphImage.attr('data-still', results[i].images.original_still.url)
                giphImage.attr('data-animate', results[i].images.original.url)
                giphImage.attr('data-state', 'still')
                giphDiv.append(giphImage)
                giphDiv.append(p)

                giphGoHere.append(giphDiv)
            }

                $(".gif").on("click", function() {
                    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                    var state = $(this).attr("data-state");
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate
                    // Else set src to the data-still value
                    if (state === "still") {
                      $(this).attr("src", $(this).attr("data-animate"));
                      $(this).attr("data-state", "animate");
                    } else {
                      $(this).attr("src", $(this).attr("data-still"));
                      $(this).attr("data-state", "still");
                    }
                  });

               
        
    }) 

});



// Function for displaying movie data
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();
    event.preventDefault()
    // Looping through the array of movies
    for (var i = 0; i < starWarsCharacters.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("characterbtn");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", starWarsCharacters[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(starWarsCharacters[i]);
      // Adding the button to the HTML
      $("#buttons-view").append(a);
    }
  }

});
