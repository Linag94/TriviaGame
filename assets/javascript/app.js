$(document).ready(function(){

    var questions = [
        {
            question: "Question 1",
            answers: [
                "answer1",
                "answer2",
                "answer3",
                "answer4",
            ],
            correct: "answer1"
        },
        {
            question: "Question 2",
            answers: [
                "answer1",
                "answer2",
                "answer3",
                "answer4",
            ],
            correct: "answer4"
        },
        {
            question: "Question 3",
            answers: [
                "answer1",
                "answer2",
                "answer3",
                "answer4",
            ],
            correct: "answer2"
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
            console.log("You right")
        } else {
            console.log("you wrong")
        }


        index++;
        if(index < questions.length){
            displayQuestion();
        } else {
            clearInterval(intervalId)
        }
    })

    displayQuestion();



})