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
            aBut.html(topics[i]);
            $("#animalButtons").append(aBut);
        }
    }

    makeButtons();



    $("#addAnimal").on("click", function() {
        event.preventDefault(); //this stops the value being entered without wanting it to
        var animalBut = $("#animal-input").val().trim(); // when we click on the submit button this adds a variable we can manipulate
        for(i = 0; i< animalBut.length; i++){
        animalBut = animalBut.replace(" ", "+"); // this allows us to add spaces in our text so we can still search gifs otherwise it just searches the first word or searches incorrectly
        }
        animalBut = animalBut.toUpperCase();
        console.log(animalBut.length)
        topics.push(animalBut); // here we're pushing the entered button into the topics array so that the button is displayed on the screen
        $("#animal-input").val(""); // here we clear out the form so that we don't have to manually delete the info in we previously placed
        makeButtons(); // here we substantiate the topics array into buttons..  see function

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
                newImage.attr("data-state", "data-still");
                newImage.attr("id", "animalAnimate");
                newDiv.attr("id", "animalDiv");
                newDiv.append(newP);
                newDiv.append(newImage);
                $("#animals").append(newDiv);                             // $("#animals").append(newImage);

                //  newImage.attr("id", "animalImg"+[i]);   
                //  newImage.attr("class", "animalAnimate");
                //  newImage.attr("data-Value", [i]);   
                //  newImage.html("<img src=" + response.data[i].images.original.url+ " >");
                //  var newImageStill = $("<button>");
                //  newImageStill.attr("id", "animalStill"+[i]);
                //  newImageStill.attr("data-Value", [i]);
                //  newImageStill.html("<img src=" + response.data[i].images.original_still.url + ">");
                // $("#animals").append(newImageStill);
                // $("#animals").append(newImage);
                // $("#animals").on("click", function(){
                //  $("#animalStill"+ Value).html(newImage + Value);
                // var imageRating = $("<p>");
                // imageRating.html(response.data[i].images.rating);
                // newImage.prepend(imageRating);

     



            }

      
     
    });

  function gifClick() {
    $(".animalAnimate").on("click", function(){
        console.log("10");
      var state = $(this).attr("data-state");

          if (state == "still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } 
      else{
          $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

});

  }
  
               
              

}

$(document).on("click", ".animal", getAnimalGif); 


});


  
    // makeButtons();


    //     changeImage();

    //     function changeImage(){
    //          if (data === "still"){
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-value", "animate");
    //       }
    //       else{
    //           $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-value", "data-still");
    //       }

    // }


// });




// var newRating = $("<h2>");
// newRating.html(response.data[i].images.rating)
// console.log(newRating);
// $("#animals").append(newRating);
// $(this).append(newImage[i]);
// newImage.html("<img src=" + response.data[i].images.original.url+ ">" + "<figcaption>"
// + response.data[i].rating + "</figcaption>");


//             this is what I originally had before changing anything!!!!!!!!!!!!!!!!!!!!
//          function getAnimalGif(animal) {
//         var animal = ($(this).attr("data-name"));   


//         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&limit=10&fmt=JSON&api_key=dc6zaTOxFJmzC";
//         $.ajax({
//             url: queryURL,
//             method: "GET"

//         }).done(function(response) {
//             var Value = ($(this).attr("data-value"));
//             $("#animals").empty();
//             console.log(response);
//             console.log(response.data[0].embed_url);
//             console.log(queryURL);
//             for(var i = 0; i < 10; i++){
//                 var newImage = $("<button>");
//                 newImage.attr("id", "animalImg"+[i]);   
//                 newImage.attr("class", "animalAnimate");
//                 newImage.attr("data-Value", [i]);   
//                 newImage.html("<img src=" + response.data[i].images.original.url+ " >");
//                 var newImageStill = $("<button>");
//                 newImageStill.attr("id", "animalStill"+[i]);
//                 newImageStill.attr("data-Value", [i]);
//                 newImageStill.html("<img src=" + response.data[i].images.original_still.url + ">");
//             $("#animals").append(newImageStill);
//             $("#animals").append(newImage);
//             $("#animals").on("click", function(){
//                 $("#animalStill"+ Value).html(newImage + Value);
//             var imageRating = $("<p>");
//             imageRating.html(response.data[i].images.rating);
//             newImage.prepend(imageRating);

//             })

// }

//         });

//     }
