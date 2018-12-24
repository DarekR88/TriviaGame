// global variables like score
var score = 0;
var elapsed = 0;

// questions and answers array/object


// game is hidden when the page loads
$(document).ready(function(){
    $("#game").hide();
    $("#results").hide();
});

// when the startGame button is clicked the rules are hidden and the #game id is shown 
$("#startGame").click(function() {
    $("#rules").hide();
    $("#game").show();
    $("#questionOne").show();
    $("#timer").show(); 
    $("#questionTwo").hide();
    $("#questionThree").hide();
    $("#riversCorrect").hide();
    $("#presidentsCorrect").hide()
    $("#polygonsCorrect").hide()
    score = 0;
    elapsed = 0;
    countDown();
    
});


// 10 second timer 
var timeLeft = 10;
var intervalId;

function countDown() {
    clearInterval(intervalId);  
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    timeLeft--;
    elapsed++;
    $("#secondsLeft").text(timeLeft);
    if (timeLeft === 0){
        $("#riversCorrect").show();
        $("#questionOne").hide();
        $("#timer").hide();
        answerShow();
        stop();
        
    };
};

function stop() {
    clearInterval(intervalId);
};

// 2 second timer
var timeShow = 2;
var timeShowInterval;

function answerShow() {
    clearInterval(timeShowInterval);
    timeShowInterval = setInterval(showDecrement, 1000);
};
function showDecrement() {
    timeShow--;
// after 2 seconds the answer goes away and the next question shows
    if (timeShow === 0){
        stopShowTimer();
        $("#riversCorrect").hide();
        $("#questionTwo").show();
        $("#timer").show();
        $("#secondsLeft").text("10");
        countDownTwo();
    };
};

function stopShowTimer() {
    clearInterval(timeShowInterval);
};

// 10 second timer two 
var timeLeftTwo = 10;
var intervalIdTwo;

function countDownTwo() {
    clearInterval(intervalIdTwo);
    intervalIdTwo = setInterval(decrementTwo, 1000);
};

function decrementTwo() {
    timeLeftTwo--;
    elapsed++;
    $("#secondsLeft").text(timeLeftTwo);
    if (timeLeftTwo === 0){
        stopTwo();
        $("#questionTwo").hide();
        $("#presidentsCorrect").show();
        $("#timer").hide();
        answerShowTwo();
    }
};

function stopTwo() {
    clearInterval(intervalIdTwo)
};

// 2 second timer two
var timeShowTwo = 2;
var timeShowIntervalTwo;

function answerShowTwo() {
    clearInterval(timeShowIntervalTwo);
    timeShowIntervalTwo = setInterval(showDecrementTwo, 1000);
};
function showDecrementTwo() {
    timeShowTwo--;
// after showing for two seconds the answer will hide and the next question will show
    if (timeShowTwo === 0){
        $("#presidentsCorrect").hide();
        stopShowTimerTwo();
        $("#secondsLeft").text("10");
        countDownThree();
        $("#timer").show();
        $("#questionThree").show();
    };
};

function stopShowTimerTwo() {
    clearInterval(timeShowIntervalTwo);
};
// 10 second timer three 
var timeLeftThree = 10;
var intervalIdThree;

function countDownThree() {
    clearInterval(intervalIdThree);
    intervalIdThree = setInterval(decrementThree, 1000);
};

function decrementThree() {
    timeLeftThree--;
    elapsed++;
    $("#secondsLeft").text(timeLeftThree);
    if (timeLeftThree === 0){
        answerShowThree();
        $("#questionThree").hide();
        $("#polygonsCorrect").show();
        $("#timer").hide();
        $("#score").text(score);
        $("#secondsTaken").text(elapsed + " seconds");
        stopThree();
    };
};

function stopThree() {
    clearInterval(intervalIdThree)
};

// 2 second timer three
var timeShowThree = 2;
var timeShowIntervalThree;

function answerShowThree() {
    clearInterval(timeShowIntervalThree);
    timeShowIntervalThree = setInterval(showDecrementThree, 1000);
};
function showDecrementThree() {
    timeShowThree--;
    if (timeShowThree === 0){
        stopShowTimerThree();
        $("#polygonsCorrect").hide();
        $("#results").show();
        $("#questionThree").hide();
        $("#timer").hide();
        $("#score").text(score);
        $("#secondsTaken").text(elapsed + " seconds");
        stopThree();
    };
};

function stopShowTimerThree() {
    clearInterval(timeShowIntervalThree);
};

// when correct answer is clicked give points and go to next question for question one
$("#correct").click(function(){
    score++;
    $("#questionOne").hide();
    $("#questionTwo").show();
    stop();
    $("#secondsLeft").text("10")
    countDownTwo()
});

// when an incorrect answer for question one is clicked the correct answer shows, the timer stops
$(".incorrect").click(function(){
    $("#questionOne").hide();
    $("#riversCorrect").show();
    $("#timer").hide();
    answerShow()
    stop();
    $("#secondsLeft").text("10");
});

// when a correct answer is clicked score goes up, next question is shown for question 2
$("#correctTwo").click(function(){
    score++;
    $("#questionTwo").hide();
    $("#questionThree").show();
    stopTwo();
    $("#secondsLeft").text("10");
    countDownThree();
});

// when an incorrect answer is clicked the correct anser shows and the timer stops for question 2
$(".incorrectTwo").click(function(){
    $("#questionTwo").hide();
    $("#presidentsCorrect").show();
    $("#timer").hide();
    stopTwo();
    answerShowTwo();
    $("#secondsLeft").text("10");
});

//when the correct answer is clicked for question 3 the results are shown
$("#correctThree").click(function(){
    score++;
    $("#questionThree").hide();
    stopThree();
    $("#results").show();
    $("#timer").hide();
    $("#score").text(score);
    $("#secondsTaken").text(elapsed + " seconds");
});

// when an incorrect answer for question 3 is chosen the correct answer shows for two seconds
$(".incorrectThree").click(function(){
    $("#questionThree").hide();
    stopThree();
    $("#polygonsCorrect").show();
    answerShowThree();
    $("#timer").hide();
    $("#score").text(score);
    $("#secondsTaken").text(elapsed + " seconds");
});

// clicking the reset button resets the game
$("#reset").click(function(){
    timerScoreReset();
    $("#results").hide();
    $("#rules").show();
});

//function for reseting the timers and scores
function timerScoreReset(){
    score = 0;
    elapsed = 0;
    $("#score").text(score);
    $("#secondsTaken").text(elapsed + " seconds");
    $("#secondsLeft").text("10");
    timeLeft = 10;
    timeShow = 2;
    timeLeftTwo = 10;
    timeShowTwo = 2;
    timeLeftThree = 10;
    timeShowThree = 2;
};



