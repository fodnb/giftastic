$(document).ready(function() {


    var topics = ["BAT", "PTERODACTYL", "FLAMINGO", "SQUIRREL", "GRASSHOPPER", "BUTTERFLY"];
    var Value;

    function makeButtons() {
        $("#animalButtons").empty();
        for (var i = 0; i < topics.length; i++) {
            var aBut = $("<button>");
            aBut.attr("class", "btn-primary");
            aBut.attr("class", "animal");
            aBut.attr("data-name", topics[i]);
            aBut.html(topics[i].replace("+", " "));
            $("#animalButtons").append(aBut);
        }
    }

    makeButtons();



    $("#addAnimal").on("click", function() {
        event.preventDefault(); //this stops the value being entered without wanting it to

        var animalBut = $("#animal-input").val().trim(); // when we click on the submit button this adds a variable we can manipulate
        
        if(animalBut.length >= 1){
        for (i = 0; i < animalBut.length; i++) {
            animalBut = animalBut.replace(" ", "+"); // this allows us to add spaces in our text so we can still search gifs otherwise it just searches the first word or searches incorrectly
        }
        animalBut = animalBut.toUpperCase();
        console.log(animalBut.length)
        topics.push(animalBut); // here we're pushing the entered button into the topics array so that the button is displayed on the screen
        $("#animal-input").val(""); // here we clear out the form so that we don't have to manually delete the info in we previously placed
        makeButtons(); // here we substantiate the topics array into buttons..  see function
    }else{
        alert("Please Enter An Animal");

    }


    });



    function getAnimalGif(animal) {
        var animal = ($(this).attr("data-name"));




        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=12&fmt=JSON&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: queryURL,
            method: "GET"

        }).done(function(response) {
            var state = ($(this).attr("data-state"));
            $("#animals").empty();

            console.log(response);
            console.log(response.data[0].images.original.url);
            console.log(queryURL);
            console.log(response.data[0].rating)
            for (var i = 0; i < 12; i++) {
                var newDiv = $("<div>");
                var newImage = $("<img>");
                var newP = $("<p>");
                newP.html(response.data[i].rating.toUpperCase());
                newImage.attr("src", response.data[i].images.original_still.url);
                newImage.attr("data-animate", response.data[i].images.original.url);
                newImage.attr("data-still", response.data[i].images.original_still.url)
                newImage.attr("data-state", "still");
                newImage.attr("id", "animalAnimate");
                newDiv.attr("id", "animalDiv");
                newDiv.append(newP);
                newDiv.append(newImage);
                $("#animals").append(newDiv);

            }



        });





    }

    function gifClick() {
        var state = $(this).attr("data-state");
        if ($(this).attr("data-state") === "still") {

            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    }


    gifClick();



    $(document).on("click", ".animal", getAnimalGif);
    $(document).on("click", "#animalAnimate", gifClick);


});
