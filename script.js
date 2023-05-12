var leftImages = ['rock_left.png', 'paper_left.png', 'scissors_left.png'];
var rightImages = ['rock_right.png', 'paper_right.png', 'scissors_right.png'];
var imageIndexLeft = 0;

function changeImage() {
    var image = document.getElementById("myImage")
    image.src = leftImages[imageIndexLeft]
    imageIndexLeft++;
    if (imageIndexLeft >= leftImages.length) {
        imageIndex = 0;
    }
  }