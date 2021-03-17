// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



let btn__play = document.getElementsByClassName("play-btn");

document.querySelector(".play-btn").onclick = function() {
    this.classList.toggle("hide");

}



var playButton = document.getElementById("play_button");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});





$(document).ready(function() {
    $(".header__burger").click(function(event) {
        $(".header__burger,.nav").toggleClass("active");
        $("body").toggleClass("lock");
    }); 
 });