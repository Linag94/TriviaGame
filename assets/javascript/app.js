$(document).ready(function(){

    var questions = [
        {
            question: "How many people were killed in the 1996 film Scream? ",
            answers: [
                "Seven",
                "Ten",
                "Five",
                "Elevn",
            ],
            correct: "Seven"
        },
        {
            question: "What year was Forrest Gump released?",
            answers: [
                "1991",
                "1989",
                "1996",
                "1994",
            ],
            correct: "1994"
        },
        {
            question: "Which 90’s movie featured the Looney Tunes on its soundtrack?",
            answers: [
                "Who framed Roger Rabbit",
                "Space Jam",
                "Like Mike",
                "Bugs Bunny",
            ],
            correct: "Space Jam"
        },
        {
            question: "Which artist sang the song “Oh, Pretty Woman” from the film Pretty Woman?",
            answers: [
                "Roy Orbison",
                "Julia Roberts",
                "Jason Alexander",
                "Richard Gere",
            ],
            correct: "Roy Orbison"
        },
        {
            question: "“Do you understand the words that are coming out of my mouth?” is from what 90's movie?",
            answers: [
                "Back to the Future",
                "Molon",
                "Rush Hour",
                "Big Mommas House",
            ],
            correct: "Rush Hour"
        },
        {
            question: "Thanks for playing",
            answers: [
                "Play Again",
                
            ],
            correct: "Play Again"
        },
    ]
    

    var index = 0;
    var intervalId;
    var timer;


    function displayQuestion(){
        $("#answerbox").empty()

        runTimer();

        var thisQuestion = questions[index];
        $("#question").text(thisQuestion.question)

        for(var i = 0; i < thisQuestion.answers.length; i++){
            var div = $("<div>");

            var btn = $("<button class='btn btn-primary answerchoice'>")
            btn.val(thisQuestion.answers[i])
            btn.text(thisQuestion.answers[i])

            div.append(btn);
            $("#answerbox").append(div);
        }
    }

    function runTimer(){
        timer = 10;
        clearInterval(intervalId)
        intervalId = setInterval(function(){
            timer--;
            if(timer === 0){
                clearInterval(intervalId)
                index++;
                if(index !== questions.length){
                    displayQuestion()
                }
            }
            $("#timer").text(timer)
            console.log("interval")
        }, 1 * 1000)
    }

      $(document).on("click", ".answerchoice", function(){
        var choice = $(this).val();

        if(choice === questions[index].correct){
            // console.log("You right")
            alert("You got it dude!")
            // message.innerHTML = "<span class='duplicateMessage'>You Got It Dude!</span>";
            // alert(document.getElementById("You Got It Dude!").innerHTML)
        } else {
            // console.log("you wrong")
            alert("No soup for you")
            // message.innerHTML = "<span class='duplicateMessage'>No Soup For You!</span>";
            // alert(document.getElementById("No Soup For You!").innerHTML)
            
        }


        index++;
        if(index < questions.length){
            displayQuestion();
        } else {
            clearInterval(intervalId);
        } 

    })

    $("#Play-Again").on("click",function(){
            location.reload();

    })
    
    displayQuestion();
    // location.reload();

})