$(function () {

    var URL = "https://clmitchell630.github.io/"
    var gitURL = "https://github.com/clmitchell630/"
    var appObj = {
        data: [
            {
                id: "News'Crepe",
                src: "https://news-crepe.herokuapp.com/",
                git: gitURL + "news-s-crepe",
                img: "./assets/images/appImg/newscrepe.png",
                description: "A gaming news app that scrapes articles from pcgamer to help sort what you want to read!"
            },
            {
                id: "Happy Little Trees",
                src: "https://floating-retreat-86405.herokuapp.com/",
                git: gitURL + "Meshugga",
                img: "./assets/images/appImg/logo.jpg",
                description: "Artists and Art-aficionados, this site was created specifically for you. People who love looking at art of all forms.  People who want to display their own art.  People who are looking for inspiration to spark some creative ideas for their next work of art."
            },
            {
                id: "BurgerBurger",
                src: "https://whispering-falls-89513.herokuapp.com/",
                git: gitURL + "burger",
                img: "./assets/images/appImg/burgerburger.jpg",
                description: "Simple burger eating app that makes you hungry while playing! Utilizes MySQL, Node.js, npm Express, npm Handlebars, npm mysql, and utilizes Heroku to host. BurgerBurger is an exercise in creating a webapp with a server and a database."
            },
            {
                id: "Friendspace",
                src: "https://fierce-caverns-64082.herokuapp.com/",
                git: gitURL + "friend-finder",
                img: "./assets/images/appImg/friendspace.png",
                description: "This webapp helps you find new friends!.. sorta. Using Node.js and Heroku to host, Friendspace is an exercise in creating a webapp with a server."
            },
            {
                id: "Bamazon",
                src: "https://github.com/clmitchell630/product-manager",
                git: gitURL + "product-manager",
                img: "./assets/images/appImg/bamazon.png",
                description: "This app utilizes CLI, Node.js, and mySQL to allow the user to view a list of available items, select which one they'd like to 'purchase', and select the quantity they'd like. Doing so will let the user know the quantity of the item they 'purchased' and the total price of the transaction."
            },
            {
                id: "Liri Bot",
                src: "https://github.com/clmitchell630/liri-bot",
                git: gitURL + "liri-bot",
                img: "./assets/images/appImg/liribot.png",
                description: "By inputting your your favorite artist into liri you can find the venues that they are playing in, where those venues are, and what date/time the event is occuring. If you give liri a track, it will list songs from a variety of arists that meet your search term and give you a link to listen to the song. Finally, if you give liri a movie title, it will list information about the movie from where it was produced to what the ratings for the movie were."
            },
            {
                id: "Wiki-Werks",
                src: URL + "wiki-werks",
                git: gitURL + "wiki-werks",
                img: "./assets/images/appImg/projectone.png",
                description: "First class project. Worked with 3 other classmates to put together a web app. This app takes a search topic and pulls up pages from Wikipedia and videos from YouTube APIs using the AJAX call and saves your topics to bring up later."
            },
            {
                id: "Where's My Train",
                src: URL + "train-scheduler",
                git: gitURL + "train-scheduler",
                img: "./assets/images/appImg/trainapp.png",
                description: "A practice in Firebase, pushing information to the Firebase server and calling that information back to the app. Also utilizes Moment.js to calculate times."
            },
            {
                id: "Gif in a Jiff",
                src: URL + "gif-in-a-jiff",
                git: gitURL + "gif-in-a-jiff",
                img: "./assets/images/appImg/GifJiff.png",
                description: "A practive in AJAX calls using the Giphy API to create a page of .gif images responding to a topic stored in a button. Default buttons are provided but you can add more by adding them to the 'MORE GIFS!' field."
            },
            {
                id: "TV Trivia Time!",
                src: URL + "TriviaGame",
                git: gitURL + "TriviaGame",
                img: "./assets/images/appImg/triviagame.png",
                description: "A game where you answer timed tv trivia questions!"
            },
            {
                id: "RupeeCollector",
                src: URL + "unit-4-game",
                git: gitURL + "unit-4-game",
                img: "./assets/images/appImg/numberguess.png",
                description: "A game where you add rupees together to match the randomly generated number. Careful though, you don't know how much each gem is worth and their values change at the begining of each game."
            },
            {
                id: "League of Legends - Hangman",
                src: URL + "Word-Guess-Game",
                git: gitURL + "Word-Guess-Game",
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
                    $("<div>").addClass("boxStyle").append(
                        $("<div>").addClass("media").append(
                            $("<img>").attr("src", appObj.data[i].img).addClass("align-self-center mr-3").attr("alt", appObj.data[i].id),
                            $("<div>").addClass("media-body").append(
                                $("<h5>").addClass("mt-0").text(appObj.data[i].id),
                                $("<p>").text(appObj.data[i].description),
                                $("<div>").addClass("container").append(
                                    $("<div>").addClass("row justify-content-end").append(
                                        $("<a>").attr("href", appObj.data[i].src).addClass("altr").attr("target", "_blank").text("Link to App"),
                                        $("<a>").attr("href", appObj.data[i].git).addClass("altr").attr("target", "_blank").text("Git Repo")
                                    )
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