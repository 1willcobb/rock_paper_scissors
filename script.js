var wins = 0;
var ties = 0;
var losses = 0;

var leftImages = ['rock_left.png', 'paper_left.png', 'scissors_left.png'];
var rightImages = ['rock_right.png', 'paper_right.png', 'scissors_right.png'];
var imageIndexLeft = 0;
var userCheck = 0;
var computerCheck;
var imageRight = document.getElementById("img_right");
var goOnce = true;




var userChoiceIterator = 0;
var userChoiceButton = document.getElementById("img_left");
userChoiceButton.addEventListener('click', function() {
    userChoiceIterator ++;
    if (userChoiceIterator >= leftImages.length){
        userChoiceIterator = 0;
        leftImages[userChoiceIterator];
    }
    changeImageLeft()
    userCheck = leftImages.indexOf(leftImages[userChoiceIterator])
});

function updateScores() {
    const myWins = document.getElementById('wins');
    myWins.innerHTML = wins;
    const myLosses = document.getElementById('losses');
    myLosses.innerHTML = losses;
    const myTies = document.getElementById('ties');
    myTies.innerHTML = ties;
}

function changeImageRight() {
    var randomImage = rightImages[Math.floor(Math.random() * rightImages.length)]
    imageRight.src = "./Assets/" + randomImage
    computerCheck = rightImages.indexOf(randomImage)
    return randomImage;
}

function changeImageLeft() {
    var image = document.getElementById("img_left")
    image.src = "./Assets/" + leftImages[userChoiceIterator]
}


function playAgain(){
    imageRight.src = "";
    goOnce = true;
}

function checkGo(){
    if (goOnce) {
        goOnce = false;
        changeImageRight();
        evaluateWinner()
    }
}

function evaluateWinner() {
    if (computerCheck === 0) {
        if (userCheck === 0) {
            output.value = "Tie - Try Again!"
        } else if (userCheck === 1){
            wins ++;
            output.value = "YOU WIN!"
        } else if (userCheck === 2){
            losses ++;
            output.value = "You Loose!"
        }
    }
    if (computerCheck === 1) {
        if (userCheck === 0) {
            losses ++;
            output.value = "You Loose!"
        } else if (userCheck === 1){
            ties ++;
            output.value = "Tie - Try Again"
        } else if (userCheck === 2){
            wins ++;
            output.value = "YOU WIN!"
        }
    }
    if (computerCheck === 2) {
        if (userCheck === 0) {
            wins ++;
            output.value = "YOU WIN!"
        } else if (userCheck === 1){
            losses ++;
            output.value = "You Loose"
        } else if (userCheck === 2){
            ties ++;
            output.value = "Tie - Try Again"
        }
    }
};

var output = document.getElementById("output");
var buttonClicked = document.getElementById("go");
buttonClicked.addEventListener('click', function() {
    console.log("Go button clicked")
    checkGo();
    updateScores();
});


var resetClicked = document.getElementById("reset");
resetClicked.addEventListener('click', function() {
    console.log("reset button clicked")
    playAgain();
    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("ties: " + ties);
});

