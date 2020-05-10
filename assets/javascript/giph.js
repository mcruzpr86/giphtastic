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
            
            var still = giph.images.downsized_still.url
            var animate = giph.images.downsized_large.url
            console.log(animate)


            var giphImage = $('<img>')
            giphImage.attr('src', still)

            
            if (still === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              }

           //var giphImage = $('<img>')
            //giphImage.attr('src', animate)

            giphDiv.append(giphImage)


        });
        
    }) 

    
    













});

})

