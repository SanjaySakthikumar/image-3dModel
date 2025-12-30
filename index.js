var input = document.getElementById("input");
var submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    if (input.files.length === 0) {
        alert("Provide an image");
    } else {
        // Get the selected file
        var file = input.files[0];

        // Create a temporary URL for the image
        var imageUrl = URL.createObjectURL(file);

        // Open the image in a new tab
        window.open(imageUrl, "_blank");
    }
});