var currentImageIndex = 0;
var galleryImages = [];
var galleryIntervals = [];

function loadGallery() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            galleryImages = JSON.parse(this.responseText);
            showImage(0);
        }
    };
    xhttp.open("GET", "gallery.json", true);
    xhttp.send();
}

function showImage(index) {
    currentImageIndex = index;
    clearInterval(galleryIntervals[currentImageIndex]);
    var galleryImage = document.getElementById("gallery-image");
    galleryImage.src = galleryImages[index].filename;
    var galleryInfo = document.getElementById("gallery-info");
    galleryInfo.innerHTML = galleryImages[index].description;
    galleryIntervals[currentImageIndex] = setInterval(function() {
        showNextImage();
    }, galleryImages[index].duration * 1000);
}

function showPreviousImage() {
    var previousIndex = currentImageIndex - 1;
    if (previousIndex < 0) {
        previousIndex = galleryImages.length - 1;
    }
    showImage(previousIndex);
}

function showNextImage() {
    var nextIndex = currentImageIndex + 1;
    if (nextIndex >= galleryImages.length) {
        nextIndex = 0;
    }
    showImage(nextIndex);
}

loadGallery();

document.getElementById("previous-button").addEventListener("click", showPreviousImage);
document.getElementById("next-button").addEventListener("click", showNextImage);
document.getElementById("update-button").addEventListener("click", loadGallery);