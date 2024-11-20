let currentIndex = 0;
let images = [];

// Function to upload images
document.getElementById("uploadButton").addEventListener("click", function() {
    const files = document.getElementById("imageUpload").files;
    const category = document.getElementById("categorySelect").value;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            imgElement.classList.add("gallery-item");
            imgElement.setAttribute("data-category", category);
            imgElement.setAttribute("onclick", "openLightbox();currentSlide(" + (images.length + 1) + ")");
            document.getElementById("gallery").appendChild(imgElement);
            images.push(imgElement.src); // Store image source for lightbox
        }

        reader.readAsDataURL(file);
    }
});

// Function to open lightbox
function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

// Function to close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Function to show the current slide
function currentSlide(n) {
    showSlide(currentIndex = n);
}

// Function to change slide
function changeSlide(n) {
    showSlide(currentIndex += n);
}

// Function to display the image in lightbox
function showSlide(n) {
    const lightboxImage = document.getElementById("lightboxImage");
    if (n > images.length) { currentIndex = 1 }
    if (n < 1) { currentIndex = images.length }

    lightboxImage.src = images[currentIndex - 1];
}

// Close lightbox when clicking outside of the image
document.getElementById("lightbox").onclick = function(event) {
    if (event.target === this) {
        closeLightbox();
    }
}



