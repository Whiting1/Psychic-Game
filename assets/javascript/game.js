
        var choices = "abcdefghijklmnopqrstuvwxyz";
        var wins = 0;
        var losses = 0;
        var guesses = 0;
        
        var winsSpan = document.getElementsByClassName('wins');
        var lossesSpan = document.getElementsByClassName('losses');
        var guessesSpan = document.getElementsByClassName('guesses');

        
        document.onkeyup = function (event) {
            var compGuess = choices[Math.floor(Math.random() * choices.length)];
            var userGuess = event.key;
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


            console.log("Compute guess is: " + compGuess);
            console.log("User guess is : " + userGuess);

            if (compGuess == userGuess) {
                    guesses++;
                    wins++;

            } else if (compGuess !== userGuess ) {

                    guesses++;  
                    losses++; 

            } else if (userGuess !== choices) {

                alert("You can't choose that!");
            
            }
            
            

            guessesSpan[0].innerText = guesses;
            lossesSpan[0].innerText = losses;
            winsSpan[0].innerText = wins;  

    }