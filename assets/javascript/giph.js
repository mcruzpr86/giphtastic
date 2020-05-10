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
$("button").on("click", function() {
    //grabs and stores the characters type value from the button
    let cast = $(this).attr("value");
        $('#giphsDiv').remove()

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


        results.forEach(giph => {
            for (var i = 0; i < results.length; i++) {
                var giphDiv = $('<div>')
                var p = $("<p>").text("Rating: " + results[i].rating);
                var still = giph.images.downsized_still.url
                var animate = giph.images.downsized_large.url
                console.log(animate)
    
                
                var giphImage = $('<img>')
                giphImage.attr('src', still)
                giphImage.addClass('gif')
                giphDiv.append(giphImage)
                giphDiv.append(p)
                
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
               //var giphImage = $('<img>')
                //giphImage.attr('src', animate)
            }
            

            giphGoHere.append(giphDiv)


        });
        
    }) 

    
    













});

})

