let slideIndex = 0;

// Showing the collapse content
document.addEventListener("DOMContentLoaded", function() {
    //const collapsibleButton = document.querySelector(".collapsible");  // can only select specific components
    const collapsibleButton = document.querySelectorAll(".collapsible");
    //const content = document.querySelectorAll(".answer");

    collapsibleButton.forEach(function(button) {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;
            
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

// Slide show function
function showSlides() {
    let slide = document.getElementsByClassName('slide');

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slideIndex++;
 
     if (slideIndex > slide.length) {
        slideIndex = 1;
     }

     slide[slideIndex - 1].style.display = "block";

     setTimeout(showSlides, 3000);
}

// Initialize the slideshow
showSlides();