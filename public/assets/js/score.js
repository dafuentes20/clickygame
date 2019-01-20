document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");


    var justClicked;
    var arrayOfClicked = [];
    var duplicateGuess = false;
    var currentScore = 0;
    var topScore = 0;

    var image = $(".jsClickTrack");
    image.on("click", function () {
        console.log("image was clicked");

        // extract value from data-id for clicked image
        var jsClickTrack = ($(this).attr("data-id"));
        justClicked = parseInt(jsClickTrack);
        console.log("just clicked ", justClicked);


        console.log("duplicateGuess ", duplicateGuess);


        // if at least one image has been clicked during this game
        if (arrayOfClicked.length > 0) {

            for (var i = 0; i < arrayOfClicked.length; i++) {
                console.log("i = ", i);

                if (justClicked === arrayOfClicked[i]) {

                    duplicateGuess = true;

                } else {

                };


            };


            if (duplicateGuess === false) {
                console.log("duplicateGuess is ", duplicateGuess);
                // add point for clicking an image that has not been clicked
                currentScore = currentScore + 1;

                // add data-id value of justClicked to arrayOfClicked
                arrayOfClicked.push(justClicked);
            } else {
                console.log("duplicateGuess is ", duplicateGuess);
                startNewRound();
            };

        } else {
            // add data-id value of justClicked to arrayOfClicked
            arrayOfClicked.push(justClicked);
            currentScore = currentScore + 1;
        };


        console.log("currentScore is: ", currentScore);
        // display current score
        $(".jsCurrentScore").html(currentScore);

        findTopScore();


        console.log("------------------------------------------------------------");

    });

    function findTopScore() {
        if (currentScore > topScore) {
            topScore = currentScore;
            console.log("topScore is ", topScore);
            $(".jsTopScore").html(topScore);
        }

    };

    function startNewRound() {
        console.log("starting new round");
        console.log("topScore is ", topScore);
        arrayOfClicked = [];
        currentScore = 0;
        duplicateGuess = false;
    };


    console.log("end of script");
});