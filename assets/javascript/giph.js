//Javascript

let starWarsCharacters = [
    'Master Yoda',
    'Obi-Wan Kenobi',
    'Qui Gon Jinn ',
    'Anakin Skywalker',
    'Darth Vader',
    'Luke Skywalker',
    'Princess Leah',
    'Darth Sidious',
    'Darth Revan',
    'Darth Maul',
    'Rey',
    'Kylo Ren',
    'BB-8',
];

// Adding click event listen listener to all buttons
$("button").on("click", function() {
    //grabs and stores the characters type value from the button
    let cast = $(this).attr("characters");

    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cast
     + "&api_key= 4EDRtUmmJKZKDA1pCiiVlPhQEGz4096l";



     $.ajax({
        url:queryURL,
        method: "GET"
    })

    
    













});

