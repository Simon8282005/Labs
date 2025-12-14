document.addEventListener("DOMContentLoaded", function() {
    //const collapsibleButton = document.querySelector(".collapsible");  // can only select specific components
    const collapsibleButton = document.querySelectorAll(".collapsible");
    const content = document.querySelectorAll(".content");

    collapsibleButton.forEach(function(button) {
        button.addEventListener("click", function() {
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        })；
    });
});