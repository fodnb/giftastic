$(document).ready(function() {


    var topics = ["BAT", "PTERODACTYL", "FLAMINGO", "SQUIRREL", "GRASSHOPPER", "BUTTERFLY"];

    function makeButtons() {
        $("#animalButtons").empty();
        for (var i = 0; i < topics.length; i++) {
            var aBut = $("<button>");
            aBut.attr("class", "btn-primary");
            aBut.attr("class", "animal");
            aBut.attr("data-name", topics[i]);
            aBut.html(topics[i]);
            $("#animalButtons").append(aBut);
        }
    }

    makeButtons();



    $("#addAnimal").on("click", function() {
        event.preventDefault();//this stops the value being entered without wanting it to
        var animalBut = $("#animal-input").val().trim(); // when we click on the submit button this adds a variable we can manipulate
        animalBut =animalBut.replace(" ", "+");// this allows us to add spaces in our text so we can still search gifs otherwise it just searches the first word or searches incorrectly
        topics.push(animalBut); // here we're pushing the entered button into the topics array so that the button is displayed on the screen
        $("#animal-input").val("");// here we clear out the form so that we don't have to manually delete the info in we previously placed
        makeButtons(); // here we substantiate the topics array into buttons..  see function

    });



    function getAnimalGif(animal) {
        var animal = ($(this).attr("data-name"));	


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&fmt=JSON&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: queryURL,
            method: "GET"

        }).done(function(response) {
        	var Value = ($(this).attr("data-value"));
        	$("#animals").empty();
            console.log(response);
            console.log(response.data[0].embed_url);
            console.log(queryURL);
            for(var i = 0; i < 10; i++){
            	var newImage = $("<button>");
            	newImage.attr("id", "animalImg"+[i]);	
            	newImage.attr("class", "animalAnimate");
            	newImage.attr("data-Value", [i]);	
            	newImage.html("<img src=" + response.data[i].images.original.url+ "	>");
            	// newImage.html("<img src=" + response.data[i].images.original.url+ ">" + "<figcaption>" + response.data[i].rating + "</figcaption>");
           		var newImageStill = $("<button>");
           		newImageStill.attr("id", "animalStill"+[i]);
           		newImageStill.attr("data-Value", [i]);
           		newImageStill.html("<img src=" + response.data[i].images.original_still.url + ">");
            $("#animals").append(newImageStill);
            $("#animals").append(newImage);
            $("#animals").on("click", function(){
            	$("#animalStill"+ Value).html(newImage + Value);
            	// $(this).append(newImage[i]);
            })
            // var newRating = $("<h2>");
            // newRating.html(response.data[i].images.rating)
            // console.log(newRating);
            // $("#animals").append(newRating);
}

        });

    }

    $(document).on("click", ".animal", getAnimalGif);
    makeButtons();

});
