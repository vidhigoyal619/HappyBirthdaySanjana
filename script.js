document.addEventListener("DOMContentLoaded", function() {
    var volumeOnButton = document.getElementById("volume-on");
    var volumeOffButton = document.getElementById("volume-off");
    var backgroundMusic = document.getElementById("background-music");

    // Function to toggle sound on and off
    function toggleSound() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            volumeOnButton.style.display = "flex";
            volumeOffButton.style.display = "none";
        } else {
            backgroundMusic.pause();
            volumeOnButton.style.display = "none";
            volumeOffButton.style.display = "flex";
        }
    }

    // Event listener for volume buttons
    volumeOnButton.addEventListener("click", toggleSound);
    volumeOffButton.addEventListener("click", toggleSound);
    // Get logo element
    var logo = document.querySelector(".logo");

    // Get images and videos
    var mediaElements = document.querySelectorAll(".box img, .box video");

    // Function to make elements appear with bubble animation
    function appearWithBubble(elements) {
        elements.forEach(function(element, index) {
            setTimeout(function() {
                element.style.opacity = "1";
            }, index * 200); // Adjust timing here
        });
    }

    // Make logo appear initially
    setTimeout(function() {
        document.querySelector('.container').style.opacity = '1';
    }, 1000); // Adjust timing here

    // Make images and videos appear after 2 seconds
    setTimeout(function() {
        appearWithBubble(mediaElements);
    }, 2000); // Adjust timing here
});
