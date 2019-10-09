$(function () {

    var URL = "https://clmitchell630.github.io/"
    var appObj = {
        data: [
            {
                id:"Friendspace",
                src: "https://fierce-caverns-64082.herokuapp.com/",
                img: "./assets/images/appImg/friendspace.png",
                description: "This webapp helps you find new friends!.. sorta. Using Node.js and Heroku to host, Friendspace is an exercise in creating a webapp with a server."
            },
            {
                id:"Bamazon",
                src: "https://github.com/clmitchell630/product-manager",
                img: "./assets/images/appImg/bamazon.png",
                description: "This app utilizes CLI, Node.js, and mySQL to allow the user to view a list of available items, select which one they'd like to 'purchase', and select the quantity they'd like. Doing so will let the user know the quantity of the item they 'purchased' and the total price of the transaction."
            },
            {
                id:"Liri Bot",
                src: "https://github.com/clmitchell630/liri-bot",
                img: "./assets/images/appImg/liribot.png",
                description: "By inputting your your favorite artist into liri you can find the venues that they are playing in, where those venues are, and what date/time the event is occuring. If you give liri a track, it will list songs from a variety of arists that meet your search term and give you a link to listen to the song. Finally, if you give liri a movie title, it will list information about the movie from where it was produced to what the ratings for the movie were."
            },
            {
                id: "Wiki-Werks",
                src: URL + "wiki-werks",
                img: "./assets/images/appImg/projectone.png",
                description: "First class project. Worked with 3 other classmates to put together a web app. This app takes a search topic and pulls up pages from Wikipedia and videos from YouTube APIs using the AJAX call and saves your topics to bring up later."
            },
            {
                id: "Where's My Train",
                src: URL + "train-scheduler",
                img: "./assets/images/appImg/trainapp.png",
                description: "A practice in Firebase, pushing information to the Firebase server and calling that information back to the app. Also utilizes Moment.js to calculate times."
            },
            {
                id: "Gif in a Jiff",
                src: URL + "gif-in-a-jiff",
                img: "./assets/images/appImg/GifJiff.png",
                description: "A practive in AJAX calls using the Giphy API to create a page of .gif images responding to a topic stored in a button. Default buttons are provided but you can add more by adding them to the 'MORE GIFS!' field."
            },
            {
                id: "TV Trivia Time!",
                src: URL + "TriviaGame",
                img: "./assets/images/appImg/triviagame.png",
                description: "A game where you answer timed tv trivia questions!"
            },
            {
                id: "RupeeCollector",
                src: URL + "unit-4-game",
                img: "./assets/images/appImg/numberguess.png",
                description: "A game where you add rupees together to match the randomly generated number. Careful though, you don't know how much each gem is worth and their values change at the begining of each game."
            },
            {
                id: "League of Legends - Hangman",
                src: URL + "Word-Guess-Game",
                img: "./assets/images/appImg/hangman.png",
                description: "Vanilla JavaScript hangman game with a League of Legends theme!"
            }
        ]
    }

    appendApp();

    function appendApp() {

        for (var i = 0; i < appObj.data.length; i++) {
            var newItem = $("<li>").addClass("media");
            var newDiv = $("<div>");

            newItem.append(
                newDiv.addClass("container").append(
                    $("<div>").addClass("boxStyle altr").append(
                        $("<a>").attr("href", appObj.data[i].src).attr("target", "_blank").append(
                            $("<div>").addClass("media").append(
                                $("<img>").attr("src", appObj.data[i].img).addClass("align-self-center mr-3").attr("alt", appObj.data[i].id),
                                $("<div>").addClass("media-body").append(
                                    $("<h5>").addClass("mt-0").text(appObj.data[i].id),
                                    $("<p>").text(appObj.data[i].description)
                                )
                            )
                        )
                    )
                )
            );

            $("#portfolio").append(newItem);
            $("#portfolio").append($("<div>").attr("style", "height: 10px;"));
        }
    }

});